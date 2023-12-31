import Head from "next/head";

const MetaTags = () => {
    return (
        <Head>
            <title>Vojtěch Váchal - Software Developer</title>
            <link rel="icon" type="image/png" href="/favicon.png" />
            <meta
                name="description"
                content="Software Developer, Web Developer, IT Enthusiast, Vojtěch Váchal's portfolio. Explore my skills, projects and feel free to connect with me."
            />
            <meta
                name="keywords"
                content="Vojtěch, Váchal, Software, Developer, Engineer, IT, Computer, Science, Portfolio, Skills"
            />
            <meta name="author" content="Ing. Vojtěch Váchal" />

            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="robots" content="index, follow" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
    );
};

export default MetaTags;