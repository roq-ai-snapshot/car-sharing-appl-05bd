interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Customer Service Representative'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Team Member', 'Customer Service Representative', 'Car Owner'],
  tenantName: 'Company',
  applicationName: 'Car Sharing Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own user information', 'Create bookings', 'Provide feedback', 'View own invoices'],
  ownerAbilities: ['Manage user information', 'Manage booking information', 'Manage feedback', 'Manage invoices'],
  getQuoteUrl: 'https://app.roq.ai/proposal/8ee1d7b4-dc39-424e-9934-dd0a7ecbef54',
};
