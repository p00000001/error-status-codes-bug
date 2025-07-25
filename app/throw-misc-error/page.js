import {headers} from "next/headers";

export async function generateMetadata({params}) {
    const {preventStaticRender} = await headers();
    throw new Error("This is an error");
}

export default async function ThrowMiscErrorPage({params, searchParams}) {
    await remoteDataFetch();
    return (
        <>This page throws a misc error</>
    )
}

function remoteDataFetch() {
    return new Promise(resolve => setTimeout(resolve, 5000));
}