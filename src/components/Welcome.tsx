import React from 'react';
import {MonitorSmartphone} from "lucide-react";
import {Button} from "@/components/ui";
import Link from "next/link";

function Welcome() {
    return (
        <div className="flex flex-col items-center justify-center mt-6">
            <span>Welcome to</span>
            <div className="flex items-center gap-3">
                <MonitorSmartphone />
                <h1 className="text-2xl font-bold text-gray-800">Digital shop</h1>
            </div>

            <Button asChild className="mt-6">
                <Link href="/products" >
                Go to products
                </Link>
            </Button>
        </div>
    );
}

export default Welcome;