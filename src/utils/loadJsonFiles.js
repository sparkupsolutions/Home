export const loadJsonFiles = () => {
    const requireContext = require.context('../Courses', false, /\.json$/);
    const jsonFiles = requireContext.keys().map(requireContext);
    return jsonFiles;
  };