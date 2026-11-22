import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'This guide builds and trains a real neural network in PyTorch to recognise handwritten digits (the MNIST dataset), explaining every line. Run it in Google Colab or on your own machine; it trains in a minute or two on a laptop and reaches about 98% accuracy.',
  nutshell: [
    '**Tensors** are NumPy-like arrays that can live on a GPU and track gradients.',
    'A model is a subclass of **nn.Module** with a **forward** method.',
    'The training loop: forward → loss → **zero_grad** → **backward** → **step**.',
    'Switch to **eval** mode and turn off gradients for testing.',
  ],
  sections: [
    {
      id: 'tensors',
      title: 'Tensors and autograd',
      blocks: [
        {
          t: 'code',
          code: String.raw`import torch

x = torch.tensor([[1.0, 2.0], [3.0, 4.0]])
print(x.shape, x.dtype)          # torch.Size([2, 2]) torch.float32
print(x @ x.T)                   # matrix multiply

w = torch.tensor(2.0, requires_grad=True)
y = w ** 3 + 4 * w               # y = w³ + 4w
y.backward()
print(w.grad)                    # dy/dw = 3w² + 4 = 16

device = "cuda" if torch.cuda.is_available() else "cpu"`,
        },
      ],
    },
    {
      id: 'data-model',
      title: 'Data and model',
      blocks: [
        {
          t: 'code',
          title: 'Load MNIST',
          code: String.raw`from torch.utils.data import DataLoader
from torchvision import datasets, transforms

tfm = transforms.Compose([
    transforms.ToTensor(),                        # pixels 0–255 → 0–1
    transforms.Normalize((0.1307,), (0.3081,)),   # standardise
])
train_ds = datasets.MNIST("data", train=True, download=True, transform=tfm)
test_ds = datasets.MNIST("data", train=False, transform=tfm)
train_dl = DataLoader(train_ds, batch_size=64, shuffle=True)
test_dl = DataLoader(test_ds, batch_size=1000)`,
          caption: '60,000 training and 10,000 test images, each 28 × 28 pixels. A DataLoader serves shuffled mini-batches.',
        },
        {
          t: 'code',
          title: 'Define the network',
          code: String.raw`import torch.nn as nn

class DigitNet(nn.Module):
    def __init__(self):
        super().__init__()
        self.layers = nn.Sequential(
            nn.Flatten(),                 # 28x28 → 784
            nn.Linear(784, 128),
            nn.ReLU(),
            nn.Dropout(0.2),
            nn.Linear(128, 10),           # one score (logit) per digit
        )

    def forward(self, x):
        return self.layers(x)

model = DigitNet().to(device)
print(sum(p.numel() for p in model.parameters()))   # 101,770 parameters`,
          caption: 'The same 784 → 128 → 10 network counted in the [how networks compute](@ai/neural/networks) guide. No softmax at the end: the loss function applies it.',
        },
      ],
    },
    {
      id: 'train',
      title: 'Train and evaluate',
      blocks: [
        {
          t: 'flow',
          nodes: [
            { label: 'Get a batch', tone: 'data' },
            { label: 'Forward: logits = model(x)', tone: 'model' },
            { label: 'Loss = cross-entropy', tone: 'output' },
            { label: 'zero_grad, backward', sub: 'compute gradients', tone: 'process' },
            { label: 'optimizer.step()', sub: 'update weights', tone: 'process' },
          ],
          loop: 'for every batch, for several epochs',
        },
        {
          t: 'code',
          title: 'The training loop',
          code: String.raw`loss_fn = nn.CrossEntropyLoss()        # softmax + negative log-likelihood
optimizer = torch.optim.Adam(model.parameters(), lr=1e-3)

for epoch in range(5):
    model.train()                        # enables dropout
    for x, y in train_dl:
        x, y = x.to(device), y.to(device)
        logits = model(x)                # forward pass
        loss = loss_fn(logits, y)
        optimizer.zero_grad()            # clear old gradients
        loss.backward()                  # backpropagation
        optimizer.step()                 # gradient descent step

    model.eval()                         # disables dropout
    correct = 0
    with torch.no_grad():                # no gradients needed for testing
        for x, y in test_dl:
            pred = model(x.to(device)).argmax(dim=1)
            correct += (pred == y.to(device)).sum().item()
    print(f"epoch {epoch + 1}: test accuracy {correct / len(test_ds):.3f}")`,
          caption: 'Expect about 97–98% after 5 epochs. Swapping in the small CNN from the [CNN guide](@ai/neural/cnn) typically reaches about 99%.',
        },
        {
          t: 'math',
          tex: String.raw`\mathcal{L}_{\text{CE}} = -\log\frac{e^{z_y}}{\sum_{j=0}^{9}e^{z_j}}`,
          syntax: [
            { sym: String.raw`\sum_{j=0}^{9}e^{z_j}`, say: String.raw`Read "the sum from j equals 0 to 9 of e to the z j": raise e to each of the ten logits and add them all up. It is the softmax normaliser, one term per digit class.` },
            { sym: String.raw`\frac{e^{z_y}}{\sum_j e^{z_j}}`, say: String.raw`Read "e to the z y over the sum of e to the z j": the softmax probability of the true class, i.e. its share of the total.` },
            { sym: String.raw`-\log`, say: String.raw`Read "minus log": takes the natural log of that probability (a negative number for a probability below 1) and flips the sign, so a low probability gives a large positive loss.` },
          ],
          worked: {
            steps: [
              String.raw`Suppose the logits for one image are \(z_y = 2.0\) for the true digit and \(0\) for each of the other nine digits.`,
              String.raw`Exponentiate: \(e^{2.0} \approx 7.389\) and \(e^{0} = 1\) for each of the nine others.`,
              String.raw`Denominator: \(7.389 + 9 = 16.389\).`,
              String.raw`Softmax probability of the true digit: \(7.389 / 16.389 \approx 0.4509\).`,
              String.raw`Loss: \(-\ln 0.4509 \approx 0.797\).`,
            ],
            answer: String.raw`The loss is about 0.80. With all logits equal the probability would be 0.1 and the loss \(\ln 10 \approx 2.303\); a perfectly confident correct answer would approach 0.`,
          },
          where: [{ sym: 'z_y', def: 'The logit (raw score) the network gave to the correct digit y' }],
          caption: 'What CrossEntropyLoss computes for one image with true digit y and logits z: the fraction is exactly softmax applied to the logits, picking out the probability the model assigned to the true class, and the −log punishes a low probability there heavily (as that true-class probability drops to 0, the loss shoots towards infinity). This is also why the network above has no softmax of its own: CrossEntropyLoss applies it internally, more numerically stably than doing it by hand.',
        },
        {
          t: 'code',
          title: 'Save and use it',
          code: String.raw`torch.save(model.state_dict(), "digits.pt")

model.load_state_dict(torch.load("digits.pt"))
model.eval()
with torch.no_grad():
    probs = model(test_ds[0][0].unsqueeze(0).to(device)).softmax(dim=1)
print(probs.argmax().item(), probs.max().item())`,
        },
        {
          t: 'table',
          head: ['Common error', 'Likely cause'],
          rows: [
            ['Loss does not go down', 'Forgot zero_grad, learning rate too high or low, labels misaligned'],
            ['Shape mismatch in Linear', 'Input size does not match the previous layer’s output; print x.shape'],
            ['Expected all tensors on the same device', 'Model on GPU but data on CPU (or the reverse); use .to(device)'],
            ['Great training accuracy, poor test accuracy', 'Overfitting: add dropout, augmentation, or stop earlier'],
          ],
        },
        { t: 'callout', tone: 'fact', title: 'The fruit fly of machine learning', text: 'MNIST was assembled by Yann LeCun, Corinna Cortes and Christopher Burges in the 1990s from US Census Bureau employees’ and high-school students’ handwriting. It became so standard for testing ideas that Geoffrey Hinton called it "the drosophila of machine learning".' },
      ],
    },
  ],
  sources: ['PyTorch documentation and tutorials. *pytorch.org/tutorials*.', 'LeCun, Y., Cortes, C., & Burges, C. J. C. The MNIST database of handwritten digits.', 'Stevens, E., Antiga, L., & Viehmann, T. (2020). *Deep Learning with PyTorch*. Manning.'],
  related: ['ai/neural/networks', 'ai/neural/training', 'ai/practice/python-tools'],
}

export default guide
