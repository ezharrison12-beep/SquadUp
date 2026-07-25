import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandLogo } from '../../components';
import { colors, spacing } from '../../theme';

export function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <BrandLogo size="small" />
        <Text style={styles.title}>Your profile</Text>
        <Text style={styles.copy}>Profiles will include interests, identity checks, trusted contacts, and safety preferences.</Text>
        <View style={styles.safetyCard}>
          <Text style={styles.safetyTitle}>Safety foundation</Text>
          <Text style={styles.safetyText}>18+ verification, reporting, block controls, and emergency resources are planned for upcoming milestones.</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.offWhite, flex: 1, padding: spacing.lg },
  card: { alignItems: 'center', backgroundColor: colors.white, borderRadius: 28, gap: spacing.md, padding: spacing.xl },
  title: { color: colors.ink, fontSize: 30, fontWeight: '900', marginTop: spacing.md },
  copy: { color: colors.slate, fontSize: 16, lineHeight: 24, textAlign: 'center' },
  safetyCard: { backgroundColor: colors.blueSoft, borderRadius: 20, marginTop: spacing.md, padding: spacing.lg },
  safetyTitle: { color: colors.blueDark, fontSize: 18, fontWeight: '900' },
  safetyText: { color: colors.slate, fontSize: 15, lineHeight: 22, marginTop: spacing.sm, textAlign: 'center' },
});
