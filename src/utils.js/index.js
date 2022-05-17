export const fetchImages = async (setter) => {
    try {
        const response = await fetch("https://picsum.photos/v2/list");
        const data = await response.json();
        setter(data);
    } catch (error) {
        console.log(error)
    }
};

export const signUp = async (username, email, password) => {
    try {
        //response = "res" from req/res
        const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username,
                email,
                password
            }),
        });
        const data = await response.json();
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}