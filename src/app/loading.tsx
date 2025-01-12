import React from 'react'
import Loader from "@/components/loader";

export default function Loading() {
    return (
        <div className={"h-screen flex justify-center items-center"}>
            <Loader/>
        </div>
    )
}
