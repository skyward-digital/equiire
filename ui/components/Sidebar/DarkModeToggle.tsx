'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Switch } from '#/ui/components/Switch';

export const DarkModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const currentTheme = theme === 'system' ? systemTheme : theme;

  return (
    <Switch
      label="Dark Mode"
      size="sm"
      checked={currentTheme === 'dark'}
      onChange={() => {
        setTheme(currentTheme === 'light' ? 'dark' : 'light');
      }}
    />
  );
};
