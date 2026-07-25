import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BrandLogo, PrimaryButton } from '../../components';
import { AuthStackParamList } from '../../types/navigation';
import { colors, spacing } from '../../theme';

type Props = NativeStackScreenProps<AuthStackParamList, 'Splash'>;

export function SplashScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.hero}>
        <BrandLogo />
        <Text style={styles.title}>Find your people. Make plans safely.</Text>
        <Text style={styles.subtitle}>
          Discover local activities, create plans, and meet new friends with trust-first community tools.
        </Text>
      </View>
      <View style={styles.actions}>
        <PrimaryButton label="Get started" onPress={() => navigation.navigate('Signup')} />
        <PrimaryButton label="I already have an account" onPress={() => navigation.navigate('Login')} variant="secondary" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.offWhite, flex: 1, padding: spacing.lg },
  hero: { alignItems: 'center', flex: 1, justifyContent: 'center' },
  title: { color: colors.ink, fontSize: 34, fontWeight: '900', marginTop: spacing.xl, textAlign: 'center' },
  subtitle: { color: colors.slate, fontSize: 17, lineHeight: 26, marginTop: spacing.md, textAlign: 'center' },
  actions: { gap: spacing.md, paddingBottom: spacing.lg },
});
