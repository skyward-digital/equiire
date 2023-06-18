import clsx from 'clsx';
import Image from 'next/image';

export type AvatarBaseProps = {
  rounded?: boolean;
  height?: number;
  width?: number;
};

export interface AvatarImageProps extends AvatarBaseProps {
  src: string;
  alt: string;
}

export interface AvatarTextProps extends AvatarBaseProps {
  className?: string;
  children: string;
}

export type AvatarProps = AvatarImageProps | AvatarTextProps;

export const Avatar = ({
  width,
  height,
  rounded = true,
  ...props
}: AvatarProps) => {
  const { src, alt } = props as AvatarImageProps;
  const { children, className } = props as AvatarTextProps;

  if (src) {
    return (
      <ImageAvatar
        src={src}
        alt={alt}
        width={width}
        height={height}
        rounded={rounded}
      />
    );
  }

  if (children) {
    return (
      <TextAvatar
        width={width}
        height={height}
        rounded={rounded}
        className={className}
      >
        {children}
      </TextAvatar>
    );
  }

  return <FallbackAvatar width={width} height={height} rounded={rounded} />;
};

export const ImageAvatar = ({
  src,
  alt,
  width,
  height,
  rounded,
}: AvatarImageProps) => (
  <Image
    src={src}
    alt={alt}
    width={width || 32}
    height={height || 32}
    className={clsx(rounded && 'rounded-full')}
  />
);

export const TextAvatar = ({
  children,
  width,
  height,
  rounded,
  className,
}: AvatarTextProps) => (
  <div
    className={clsx(
      'flex items-center justify-center',
      rounded && 'rounded-full',
      className,
    )}
    style={{
      width: width || 32,
      height: height || 32,
      fontSize: width ? width * 0.5 : undefined,
    }}
  >
    {children}
  </div>
);

export const FallbackAvatar = ({ width, height, rounded }: AvatarBaseProps) => {
  return (
    <Image
      src="/images/default-avatar.png"
      alt="Default avatar"
      width={width || 32}
      height={height || 32}
      className={clsx(rounded && 'rounded-full')}
    />
  );
};
