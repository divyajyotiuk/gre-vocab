export default {
    url: process.env.NEXT_PUBLIC_API_URL,
    updateDeck: "update-deck",
    api_endpoint: () => {
        if(typeof window !== "undefined"){
            return window.location.origin;
        }
        return process.env.NEXT_PUBLIC_API_URL;
    }
}