const mockModels = [
  { id: 1, name: 'Image Classification Model', status: 'Trained', createdAt: '2023-05-01' },
  { id: 2, name: 'Text Generation Model', status: 'Training', createdAt: '2023-05-05' },
  // Add more mock models
];

const mockDatasets = [
  { id: 1, name: 'MNIST Dataset', size: '11.5 MB', uploadedAt: '2023-04-28' },
  { id: 2, name: 'IMDB Reviews', size: '80.2 MB', uploadedAt: '2023-05-02' },
  // Add more mock datasets
];

export const getModels = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockModels), 500);
  });
};

export const getDatasets = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockDatasets), 500);
  });
};

// Add more mock API functions as needed