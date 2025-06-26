export const generateSystems = () => ({
    fakeSystem: {
                value: 'custom',
        name: t`Custom format`,
        csv: true,
        hidden: true,
        noReverse: true,
        contraAccount: true,
        supportsGenericVat: true,
        employeeContraAccount: true,
        supportedFeatures: {}
    }
})