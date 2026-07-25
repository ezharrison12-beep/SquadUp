import { StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../theme';

type BrandLogoProps = {
  size?: 'small' | 'large';
};

export function BrandLogo({ size = 'large' }: BrandLogoProps) {
  const isLarge = size === 'large';

  return (
    <View style={styles.container}>
      <View style={[styles.mark, isLarge ? styles.largeMark : styles.smallMark]}>
        <Text style={[styles.markText, isLarge ? styles.largeMarkText : styles.smallMarkText]}>UP</Text>
      </View>
      <Text style={[styles.wordmark, isLarge ? styles.largeWordmark : styles.smallWordmark]}>
        squad<Text style={styles.wordmarkAccent}>UP</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    gap: spacing.md,
  },
  mark: {
    alignItems: 'center',
    backgroundColor: colors.red,
    borderColor: colors.blue,
    borderWidth: 4,
    justifyContent: 'center',
    shadowColor: colors.blueDark,
    shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.16,
    shadowRadius: 24,
  },
  largeMark: {
    borderRadius: 32,
    height: 96,
    width: 96,
  },
  smallMark: {
    borderRadius: 18,
    height: 52,
    width: 52,
  },
  markText: {
    color: colors.white,
    fontWeight: '900',
    letterSpacing: 1,
  },
  largeMarkText: {
    fontSize: 28,
  },
  smallMarkText: {
    fontSize: 16,
  },
  wordmark: {
    color: colors.blueDark,
    fontWeight: '900',
  },
  largeWordmark: {
    fontSize: 42,
  },
  smallWordmark: {
    fontSize: 26,
  },
  wordmarkAccent: {
    color: colors.red,
  },
});
