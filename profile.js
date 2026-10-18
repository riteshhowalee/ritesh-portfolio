// Replace these values with your verified personal details. Leave unavailable links empty.
const PROFILE = {
  name: 'Ritesh Howale',
  email: '',
  github: '',
  linkedin: '',
  projects: [
    { id: 'risk', category: 'finance', type: 'FINANCE / RISK', title: 'A clearer view of portfolio risk', summary: 'Exploring how diversification changes the balance between risk and return.', tags: ['Python', 'Pandas', 'Portfolio theory'], visual: 'line', question: 'How does asset allocation affect the range of possible portfolio outcomes?', approach: 'Use a sample return dataset, calculate covariance, and compare allocations across an illustrative risk–return frontier. Check sensitivity to the chosen time window.', takeaway: 'A useful analysis communicates assumptions and uncertainty alongside returns. This concept is ready for real data, reproducible code, and validated findings.' },
    { id: 'forecast', category: 'data', type: 'DATA SCIENCE / PREDICTION', title: 'What comes after the trend?', summary: 'A forecasting concept that puts reliable baselines before complex models.', tags: ['Time series', 'Scikit-learn', 'Validation'], visual: 'bars', question: 'Can a forecasting model outperform a simple seasonal baseline on unseen observations?', approach: 'Explore a sample demand series, use time-ordered validation, and compare a baseline with lag-based models. Inspect prediction intervals and errors by period.', takeaway: 'Forecasting is useful when its evaluation reflects the future. This is a proposed workflow; no performance results or completed implementation are claimed.' },
    { id: 'inference', category: 'stats', type: 'STATISTICS / EXPERIMENTS', title: 'Is the difference meaningful?', summary: 'Looking beyond a single p-value to understand an experiment’s evidence.', tags: ['A/B testing', 'Inference', 'Visualisation'], visual: 'dots', question: 'How can an experiment distinguish a meaningful change from sampling variation?', approach: 'Define an outcome and practical effect threshold, plan sample size, and explore simulated groups. Report effect sizes, confidence intervals, and limitations.', takeaway: 'Good experimental thinking begins before collecting data. This illustrative study is designed to become a documented analysis with transparent assumptions.' }
  ]
};
