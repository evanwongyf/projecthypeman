import type { Guide } from '../../../guide'

const guide: Guide = {
  intro:
    'Clustering finds groups in data without being told what the groups are: customer segments, related documents, types of cells. There are no labels to check against, so choosing the method and the number of clusters takes judgement as well as maths.',
  nutshell: [
    '**k-means**: repeatedly assign points to the nearest centre, then move each centre to the mean of its points.',
    'k-means minimises **inertia** (within-cluster squared distance) but finds round, similar-sized clusters and depends on the starting centres.',
    'Choose k with the **elbow method** or the **silhouette score**.',
    '**Hierarchical** clustering builds a tree of merges; **DBSCAN** finds dense regions of any shape and labels outliers.',
  ],
  sections: [
    {
      id: 'kmeans',
      title: 'k-means, step by step',
      blocks: [
        { t: 'ai-viz', viz: 'kmeans' },
        {
          t: 'math',
          tex: String.raw`\min_{C_1,\dots,C_k}\ \sum_{j=1}^{k}\sum_{\mathbf{x} \in C_j}\lVert\mathbf{x} - \boldsymbol{\mu}_j\rVert^2, \qquad \boldsymbol{\mu}_j = \frac{1}{|C_j|}\sum_{\mathbf{x} \in C_j}\mathbf{x}`,
          where: [
            { sym: 'C_1,\\dots,C_k', def: 'The k clusters: a partition of every point into one of k groups' },
            { sym: '\\boldsymbol{\\mu}_j', def: 'The centre (centroid) of cluster j: the mean of every point assigned to it' },
            { sym: '\\lVert\\mathbf{x} - \\boldsymbol{\\mu}_j\\rVert^2', def: 'How far point x sits from its cluster\'s centre, squared' },
          ],
          syntax: [
            { sym: String.raw`\min_{C_1,\dots,C_k}`, say: String.raw`Read "minimise over C_1 up to C_k": consider every way of splitting the points into \(k\) groups and keep the split that makes what follows smallest.` },
            { sym: String.raw`\sum_{j=1}^{k}\sum_{\mathbf{x} \in C_j}`, say: String.raw`Two sums nested. The outer one steps through the clusters \(j = 1, \dots, k\); the inner one steps through every point \(\mathbf{x}\) that belongs to (the symbol \(\in\) reads "is in") cluster \(j\). Together they visit every point once.` },
            { sym: String.raw`\lVert\mathbf{x} - \boldsymbol{\mu}_j\rVert^2`, say: String.raw`Read "the norm of x minus mu j, squared": subtract the centre from the point, square each coordinate gap and add them. In 2D that is \((x_1 - \mu_1)^2 + (x_2 - \mu_2)^2\), with no square root. Bold letters are vectors (lists of coordinates).` },
            { sym: String.raw`|C_j|`, say: String.raw`Bars around a set mean "how many points are in it", not an absolute value. So \(\boldsymbol{\mu}_j\) is "add up the points in cluster j and divide by the count": the average point.` },
          ],
          worked: {
            title: String.raw`One k-means update on six points`,
            steps: [
              String.raw`Points: A(1, 1), B(1.5, 2), C(3, 3.5), D(5, 7), E(3.5, 5), F(4.5, 5), with \(k = 2\) and starting centres \(\boldsymbol{\mu}_1 = (1, 1)\), \(\boldsymbol{\mu}_2 = (5, 7)\).`,
              String.raw`Squared distances to \(\boldsymbol{\mu}_1\): A 0, B \(0.5^2 + 1^2 = 1.25\), C 10.25, D 52, E 22.25, F 28.25. To \(\boldsymbol{\mu}_2\): A 52, B 37.25, C 16.25, D 0, E 6.25, F 4.25.`,
              String.raw`Assign each point to the nearer centre: \(C_1 = \{A, B, C\}\), \(C_2 = \{D, E, F\}\). The inertia with the old centres is \(0 + 1.25 + 10.25 + 0 + 6.25 + 4.25 = 22\).`,
              String.raw`Update the centres to the means: \(\boldsymbol{\mu}_1 = \big(\tfrac{1 + 1.5 + 3}{3}, \tfrac{1 + 2 + 3.5}{3}\big) = (1.833, 2.167)\) and \(\boldsymbol{\mu}_2 = \big(\tfrac{5 + 3.5 + 4.5}{3}, \tfrac{7 + 5 + 5}{3}\big) = (4.333, 5.667)\).`,
              String.raw`Recompute the squared distances to the new centres: cluster 1 gives \(2.056 + 0.139 + 3.139 = 5.333\); cluster 2 gives \(2.222 + 1.139 + 0.472 = 3.833\). New inertia \(= 9.167\).`,
              String.raw`Reassigning points to the nearest new centre gives exactly the same groups, so nothing changes any more.`,
            ],
            answer: String.raw`Moving the centres cut the inertia from 22 to 9.17 and the assignments stopped changing, so k-means has converged.`,
          },
          caption: 'The inertia: total squared distance from every point to its own cluster\'s centre, summed across all k clusters. It is the single number k-means is minimising, so a lower inertia always means tighter, more compact clusters, but it mechanically falls as k rises (hitting 0 once every point is its own cluster), so it can only be compared fairly between runs with the *same* k. The assignment step lowers it by moving each point to its nearest centre; the update step lowers it because the mean is the point minimising squared distance to a group. It can never rise, so the algorithm always stops, though possibly at a local minimum, which is why it is usually run from several random starting centres and the lowest-inertia result is kept.',
        },
        {
          t: 'steps',
          items: [
            { title: 'Initialise', body: 'Pick k starting centres. k-means++ spreads them out: each new centre is chosen with probability proportional to its squared distance from the existing ones.' },
            { title: 'Assign', body: 'Give every point the label of its nearest centre.' },
            { title: 'Update', body: 'Move every centre to the mean of its points.' },
            { title: 'Repeat', body: 'Until assignments stop changing. Run several random starts and keep the lowest inertia.' },
          ],
        },
      ],
    },
    {
      id: 'choose-k',
      title: 'How many clusters?',
      blocks: [
        {
          t: 'plot',
          title: 'The elbow method (data with 4 true groups)',
          x: [1, 8],
          y: [0, 100],
          xLabel: 'k',
          yLabel: 'inertia',
          data: [{ pts: [[1, 96], [2, 58], [3, 34], [4, 14], [5, 12], [6, 10.5], [7, 9.3], [8, 8.4]], dots: true }],
          points: [{ x: 4, y: 14, label: 'elbow: k = 4' }],
          caption: 'Inertia always falls as k rises (with k = n it is zero), so look for the bend where adding clusters stops helping much.',
        },
        {
          t: 'math',
          tex: String.raw`s(i) = \frac{b(i) - a(i)}{\max\big(a(i), b(i)\big)}`,
          where: [
            { sym: 'a(i)', def: 'Mean distance from point i to the others in its own cluster' },
            { sym: 'b(i)', def: 'Mean distance from i to the points of the nearest other cluster' },
          ],
          syntax: [
            { sym: String.raw`s(i)`, say: String.raw`Read "s of i": the silhouette score of point number \(i\). There is one score per point; the average over all points rates the whole clustering.` },
            { sym: String.raw`b(i) - a(i)`, say: String.raw`The gap between "how far the next-best cluster is" and "how far your own cluster is". Positive when your own cluster is the closer one (good), negative when another cluster is closer.` },
            { sym: String.raw`\max\big(a(i), b(i)\big)`, say: String.raw`Read "the larger of a and b": pick whichever is bigger. Dividing by it squeezes the score into the range −1 to 1.` },
          ],
          worked: {
            title: String.raw`Silhouette of six points on a line`,
            steps: [
              String.raw`Cluster 1 holds the points 1, 2, 3 and cluster 2 holds 8, 9, 10 (distance is just the gap between numbers).`,
              String.raw`Point 2: \(a = (|2-1| + |2-3|)/2 = 1\), and \(b = (6 + 7 + 8)/3 = 7\). So \(s = (7 - 1)/\max(1, 7) = 6/7 = 0.857\).`,
              String.raw`Point 1: \(a = (1 + 2)/2 = 1.5\), \(b = (7 + 8 + 9)/3 = 8\), \(s = 6.5/8 = 0.8125\). Point 3: \(a = 1.5\), \(b = (5 + 6 + 7)/3 = 6\), \(s = 4.5/6 = 0.75\).`,
              String.raw`Average for cluster 1: \((0.8125 + 0.857 + 0.75)/3 = 0.807\).`,
              String.raw`For contrast, a border point with \(a = 4\) and \(b = 4.5\) scores \(0.5/4.5 = 0.11\), and a misplaced point with \(a = 5\), \(b = 4\) scores \((4 - 5)/5 = -0.2\).`,
            ],
            answer: String.raw`The average of about 0.81 means tight, well-separated clusters; a score near 0.11 would mean a point sitting on the border, and a negative score one in the wrong cluster.`,
          },
          caption: 'The silhouette ranges from −1 to 1: near 1 means well inside its cluster, near 0 means on a border, negative means probably in the wrong cluster. Choose the k with the highest average.',
        },
        {
          t: 'metric',
          name: 'the silhouette score',
          shows: 'How well each point fits its assigned cluster compared with the nearest alternative cluster, a built-in sanity check for clustering, which otherwise has no "ground truth" labels to measure accuracy against. Averaged across all points, it gives a single score for comparing different values of k or entirely different clustering methods.',
          eli5: 'Imagine being assigned to a table at a wedding. A high silhouette score means you\'re sitting comfortably among people you get along with great (close to your own table, far from the next one over). A score near zero means you\'re basically sitting right on the border between two tables, you\'d fit in about equally well at either. A negative score means someone sat you at entirely the wrong table, you actually have more in common with the people at the next table over.',
          higher: 'Points sit clearly inside their own cluster and far from neighbouring clusters, a confident, well-separated clustering. A high average silhouette (closer to 1) across the dataset suggests k (or the clustering method) has found real, distinct structure in the data.',
          lower: 'Points sit near the border between clusters, or even closer to a different cluster than their own, a weaker, more ambiguous clustering. Low or negative silhouette scores often mean k is set wrong (too many or too few clusters) or that the data simply doesn\'t have clean, separable groups in it at all.',
          typical: 'Above about 0.5 is generally considered a reasonably strong clustering structure; 0.25–0.5 suggests weak or overlapping structure worth questioning; below 0.25 (and especially near zero or negative) suggests little real clustering structure was found, common practice is to compute the average silhouette for several values of k and pick whichever is highest.',
        },
      ],
    },
    {
      id: 'others',
      title: 'Other methods',
      blocks: [
        {
          t: 'table',
          head: ['Method', 'Idea', 'Good for', 'Watch out'],
          rows: [
            ['k-means', 'Nearest centre, iterate', 'Large data, round clusters', 'Must choose k; sensitive to scale and outliers'],
            ['Hierarchical (agglomerative)', 'Start with each point alone; repeatedly merge the closest two clusters', 'Seeing structure at every scale (a dendrogram)', 'Slow for large n; choice of linkage matters'],
            ['DBSCAN', 'Clusters are dense regions: points with at least minPts neighbours within ε', 'Odd shapes, noise and outliers', 'Choosing ε; clusters of very different density'],
            ['Gaussian mixture', 'Each cluster is a bell-shaped distribution; soft membership', 'Elliptical, overlapping clusters', 'Must choose k; can be unstable'],
          ],
        },
        {
          t: 'code',
          code: String.raw`from sklearn.cluster import KMeans, DBSCAN
from sklearn.metrics import silhouette_score

for k in range(2, 8):
    km = KMeans(n_clusters=k, n_init=10, random_state=0).fit(X)
    print(k, km.inertia_, silhouette_score(X, km.labels_))

db = DBSCAN(eps=0.3, min_samples=5).fit(X)
print(set(db.labels_))   # -1 marks noise points`,
        },
        { t: 'callout', tone: 'fact', title: 'From telephone lines', text: 'The k-means algorithm was devised by Stuart Lloyd at Bell Labs in 1957 for pulse-code modulation, compressing signals for transmission, though it was not published until 1982. The name "k-means" was coined by James MacQueen in 1967.' },
      ],
    },
  ],
  sources: ['Lloyd, S. (1982). Least squares quantization in PCM. *IEEE Transactions on Information Theory*, 28(2), 129–137.', 'Arthur, D., & Vassilvitskii, S. (2007). k-means++: The advantages of careful seeding. *SODA*.', 'Ester, M., Kriegel, H.-P., Sander, J., & Xu, X. (1996). A density-based algorithm for discovering clusters. *KDD*.', 'Rousseeuw, P. J. (1987). Silhouettes. *Journal of Computational and Applied Mathematics*, 20, 53–65.'],
  related: ['ai/foundations/learning-types', 'ai/algorithms/pca', 'ai/algorithms/knn'],
}

export default guide
