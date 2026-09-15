import styles from './SectionHeading.module.css';

type SectionHeadingProps = {
  tag: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  tone?: 'default' | 'inverse';
  className?: string;
};

export default function SectionHeading({
  tag,
  title,
  description,
  align = 'left',
  tone = 'default',
  className = '',
}: SectionHeadingProps) {
  const classes = [
    styles.heading,
    align === 'center' ? styles.center : '',
    tone === 'inverse' ? styles.inverse : '',
    className,
  ].join(' ');

  return (
    <div className={classes}>
      <span className={styles.tag}>{tag}</span>
      <h2 className={styles.title}>{title}</h2>
      {description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
