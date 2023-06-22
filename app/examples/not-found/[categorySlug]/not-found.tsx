import { Boundary } from '#/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['./[categorySlug]/not-found.tsx']} color="pink">
      <div className="text-pink-600 space-y-3">
        <h2 className="text-lg font-bold">Category Not Found</h2>

        <p className="text-sm">Could not find requested resource</p>
      </div>
    </Boundary>
  );
}
