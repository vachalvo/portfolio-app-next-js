export const sendContactForm = async (data: any) => {
    const apiEndpoint = '/api/contact';

    try {
        const response = await fetch(apiEndpoint, {
            method: 'POST',
            body: JSON.stringify(data),
        });

        const responseData = await response.json();

        if (!response.ok)
            throw new Error(responseData.message);

        return { success: responseData.message };
    } catch (error) {
        console.error(error);
        // @ts-ignore
        return { error: error.message };
    }
}