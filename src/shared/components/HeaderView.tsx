import React from 'react';

interface HeaderViewProps {
  title: string;
  description: string;
}

export default function HeaderView({ title, description }: HeaderViewProps) {
  return (
    <header style={styles.container}>
      <h1 style={styles.title}>{title}</h1>
      <p style={styles.description}>{description}</p>
    </header>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    marginBottom: '32px',
  },
  title: {
    fontSize: '34px',
    fontWeight: 'bold',
    color: '#111330',
    margin: 0,
    letterSpacing: '1px',
  },
  description: {
    fontSize: '18px',
    color: '#71717A',
    margin: 0,
  },
};