
const URL = `http://localhost:3002/images`;

const fetchImages = async page => {
    const response = await fetch(URL);
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.errors);
    }
    return data;
};



export { fetchImages };