import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { colors, spacing } from '../../theme';

const plans = [
  { title: 'Sunset pickup soccer', meta: 'Tonight • 1.2 mi • 8 spots', tag: 'Active' },
  { title: 'Coffee & co-working', meta: 'Tomorrow • 0.6 mi • 5 spots', tag: 'Social' },
  { title: 'Weekend trail walk', meta: 'Saturday • 3.4 mi • 12 spots', tag: 'Outdoor' },
];

export function DiscoverScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.kicker}>Discover</Text>
          <Text style={styles.title}>Plans near you</Text>
          <Text style={styles.copy}>A first look at local activities. Search, filters, and join flows come next.</Text>
        </View>
        {plans.map((plan) => (
          <View key={plan.title} style={styles.card}>
            <View style={styles.badge}><Text style={styles.badgeText}>{plan.tag}</Text></View>
            <Text style={styles.planTitle}>{plan.title}</Text>
            <Text style={styles.meta}>{plan.meta}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.offWhite, flex: 1 },
  content: { gap: spacing.md, padding: spacing.lg },
  header: { backgroundColor: colors.blueDark, borderRadius: 28, padding: spacing.lg },
  kicker: { color: colors.red, fontSize: 14, fontWeight: '900', letterSpacing: 1, textTransform: 'uppercase' },
  title: { color: colors.white, fontSize: 34, fontWeight: '900', marginTop: spacing.sm },
  copy: { color: colors.blueSoft, fontSize: 16, lineHeight: 24, marginTop: spacing.sm },
  card: { backgroundColor: colors.white, borderColor: colors.border, borderRadius: 24, borderWidth: 1, padding: spacing.lg },
  badge: { alignSelf: 'flex-start', backgroundColor: colors.blueSoft, borderRadius: 999, paddingHorizontal: spacing.md, paddingVertical: spacing.sm },
  badgeText: { color: colors.blue, fontWeight: '800' },
  planTitle: { color: colors.ink, fontSize: 22, fontWeight: '900', marginTop: spacing.md },
  meta: { color: colors.slate, fontSize: 15, marginTop: spacing.sm },
});
