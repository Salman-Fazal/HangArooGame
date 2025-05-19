export const getStats = () => {
  return (
    JSON.parse(localStorage.getItem("hangarooStats")) || { wins: 0, losses: 0 }
  );
};

export const updateStats = (win) => {
  const stats = getStats();
  if (win) stats.wins += 1;
  else stats.losses += 1;
  localStorage.setItem("hangarooStats", JSON.stringify(stats));
};
