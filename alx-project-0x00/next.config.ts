import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
export interface ButtonProps {
  title: string
  styles: string
  size?: 'small' | 'medium' | 'large'
  shape?: 'rounded-sm' | 'rounded-md' | 'rounded-full'
  className?: string
}
