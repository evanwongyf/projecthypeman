import type { Guide } from '../../guide'

const guide: Guide = {
  intro:
    'Training breaks you down; recovery builds you back up. Sleep, food and easy days do more for your fitness than any gadget, and the warning signs of doing too much are worth knowing.',
  nutshell: [
    '**Sleep** 7–9 hours. It is the most powerful recovery tool there is.',
    'Follow hard days with easy days, and take at least one rest day a week.',
    'Muscle soreness (DOMS) peaks 1–3 days after new or hard training and fades on its own.',
    'Foam rolling and massage can make you feel better short term; they do not replace rest.',
    'Persistent fatigue, falling performance, poor sleep and low mood together suggest you are overdoing it.',
  ],
  sections: [
    {
      id: 'sleep',
      title: 'Sleep first',
      blocks: [
        {
          t: 'p',
          text: 'During deep sleep the body releases growth hormone and repairs tissue. In one study, college basketball players who extended their sleep to about 10 hours a night sprinted faster and shot more accurately. You do not need 10 hours, but cutting sleep to fit in more training is usually a bad trade. See [sleep and the body](@memory/sleep-and-body).',
        },
      ],
    },
    {
      id: 'soreness',
      title: 'Soreness',
      blocks: [
        {
          t: 'cards',
          items: [
            { title: 'Normal (DOMS)', body: 'A dull, achy stiffness in the muscles you trained, 24–72 hours later, easing as you move. It is worst after new exercises and lowering (eccentric) work.' },
            { title: 'Not normal', body: 'Sharp or pinpoint pain, pain in a joint or bone, swelling, or pain that gets worse as you exercise. Stop and get it checked.' },
            { title: 'What helps', body: 'Gentle movement, sleep, enough protein and time. Soreness drops a lot once your body is used to the training.' },
            { title: 'What does not', body: 'Stretching does not prevent DOMS. Painkillers to train through injury are a bad idea.' },
          ],
        },
        { t: 'exercises', ids: ['cat-cow', 'hip-flexor-stretch', 'hamstring-stretch'] },
      ],
    },
    {
      id: 'overdoing',
      title: 'Signs you are doing too much',
      blocks: [
        {
          t: 'checklist',
          items: [
            'Feeling tired all the time, even after rest days',
            'Performance getting worse for a couple of weeks',
            'Resting heart rate up by 5–10 beats on waking',
            'Poor sleep, irritability or low motivation',
            'Frequent colds or niggles that will not clear',
          ],
        },
        {
          t: 'callout',
          tone: 'warn',
          title: 'What to do',
          text: 'Take a few days very easy, then cut your training by a third for a week or two. If symptoms last for weeks, or you have lost your period, see a doctor: under-fuelling (relative energy deficiency in sport, RED-S) is common in endurance athletes.',
        },
      ],
    },
  ],
  sources: [
    'Mah, C. D., Mah, K. E., Kezirian, E. J., & Dement, W. C. (2011). The effects of sleep extension on the athletic performance of collegiate basketball players. *Sleep*, 34(7), 943–950.',
    'Herbert, R. D., de Noronha, M., & Kamper, S. J. (2011). Stretching to prevent or reduce muscle soreness after exercise. *Cochrane Database of Systematic Reviews*, (7), CD004577.',
    'Meeusen, R., et al. (2013). Prevention, diagnosis, and treatment of the overtraining syndrome. *Medicine & Science in Sports & Exercise*, 45(1), 186–205.',
  ],
  related: ['fitness/fuel', 'fitness/principles', 'habits/wellbeing'],
}

export default guide
