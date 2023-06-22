export const ProductLowStockWarning = ({ stock }: { stock: number }) => {
  if (stock > 3) {
    return null;
  }

  if (stock === 0) {
    return <div className="text-cyan-600 text-sm">Out of stock</div>;
  }

  return (
    <div className="text-cyan-600 text-sm">Only {stock} left in stock</div>
  );
};
