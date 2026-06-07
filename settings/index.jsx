function settingsComponent(props) {
  return (
    <Page>
      <Section title="Urge Meter">
        <Text>No settings required. All state is stored on-device.</Text>
      </Section>
    </Page>
  );
}

registerSettingsPage(settingsComponent);
