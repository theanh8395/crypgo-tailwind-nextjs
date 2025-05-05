const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

const generateRandomId = () => Math.random().toString(36).substr(2, 9);

export { generateRandomId, delay };
