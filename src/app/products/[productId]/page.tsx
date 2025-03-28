import React from 'react';
import {DATA} from "@/modules/products/mock/products";
import ProductDetail from "@/modules/products/components/ProductDetail";

async function ProductDetailPage({params}: { params: Promise<{ productId: string }> }) {
    const paramsData = await params

    const product = DATA[0]

    return (
        <ProductDetail {...product} />
    );
}

export default ProductDetailPage;