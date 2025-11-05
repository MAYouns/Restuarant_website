"use client";
import { useParams } from "next/navigation";

const Page = () => {
    const x = useParams();
    return (
        <div>
            {x.productId}
        </div>
    );
}

export default Page;
