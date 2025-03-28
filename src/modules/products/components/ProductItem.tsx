import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui';
import Image from 'next/image';
import { GalleryThumbnails, Heart } from 'lucide-react';
import Link from 'next/link';

const ProductItem = ({ product }: { product: any }) => {
  return (
    <Card className="w-[400px] transform transition-transform duration-300 hover:scale-105">
      <CardHeader>
        <div className="relative w-full h-[300px]">
          <Image
            src={product?.images?.[0]?.image || '/assets/noImage.jpg'}
            alt={product?.name}
            fill
            className="rounded-t-lg object-cover"
          />
        </div>
      </CardHeader>

      <CardContent>
        <h2 className="text-xl font-bold">{product?.name}</h2>

        <p className="text-gray-500">{product?.category}</p>

        <div className="flex items-center justify-between">
          <p className="mt-4 font-semibold text-lg">
            ${product?.price?.toFixed(2)}
          </p>

          <div className="flex gap-2">
            <Heart />

            <Link href={`/products/catalog?id=${product.id}`}>
              <GalleryThumbnails />
            </Link>
          </div>
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" asChild>
          <Link href={`/products/${product?.id}`}>More Detail</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductItem;
