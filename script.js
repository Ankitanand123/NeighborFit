const neighborhoods = [
  {
    name: "GreenVille",
    features: {
      parks: true,
      nightlife: false,
      publicTransport: true,
    },
  },
  {
    name: "Downtown Buzz",
    features: {
      parks: false,
      nightlife: true,
      publicTransport: true,
    },
  },
  {
    name: "Suburbia",
    features: {
      parks: true,
      nightlife: false,
      publicTransport: false,
    },
  },
];

function findMatch() {
  const preferences = {
    parks: document.getElementById("parks").checked,
    nightlife: document.getElementById("nightlife").checked,
    publicTransport: document.getElementById("publicTransport").checked,
  };

  const scored = neighborhoods.map((n) => {
    let score = 0;
    for (let key in preferences) {
      if (preferences[key] && n.features[key]) score++;
    }
    return { ...n, score };
  });

  const best = scored.sort((a, b) => b.score - a.score)[0];

  const resultDiv = document.getElementById("result");
  resultDiv.style.display = "block";
  resultDiv.innerHTML = `
    <strong>🏡 Best Match: ${best.name}</strong><br/>
    Features: ${Object.entries(best.features)
      .filter(([_, val]) => val)
      .map(([key]) => key)
      .join(", ")}
  `;
}
