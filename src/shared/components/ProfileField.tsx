import React from 'react';

interface IconProps {
  size?: number;
  strokeWidth?: number;
  className?: string;
  color?: string;
}

interface ProfileFieldProps {
  label: string;
  value?: string;
  icon: React.ComponentType<IconProps>;
  thickness?: number;
}

export default function ProfileField({
  label,
  value,
  icon: Icon,
  thickness = 1.8,
}: ProfileFieldProps) {
  return (
    <div style={styles.cardContainer}>
      <div style={styles.iconWrapper}>
        <Icon size={22} strokeWidth={thickness || 1.2} color="#1D44BE" aria-hidden="true" />
      </div>
      <div style={styles.textContainer}>
        <span style={styles.label}>{label}</span>
        <span style={styles.value}>{value || '-'}</span>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  cardContainer: {
    backgroundColor: '#FAFAFA',
    border: '1px solid #D4D4D4',
    borderRadius: '12px',
    padding: '14px 18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: '16px',
    width: '100%',
  },
  iconWrapper: {
    backgroundColor: '#E8EFFC',
    borderRadius: '50%',
    width: '42px',
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  textContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '4px',
    overflow: 'hidden',
  },
  label: {
    fontSize: '16px',
    color: '#606060',
    fontWeight: 400,
  },
  value: {
    fontSize: '20px',
    color: '#1E293B',
    fontWeight: 500,
    wordBreak: 'break-all',
  },
};