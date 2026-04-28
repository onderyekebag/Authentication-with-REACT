export interface AccountInterface {
    tenantId?: number;
    tenantName?: string;
    login?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    imageUrl?: string;
    activated?: boolean;
    countryCode?: string;
    langCode?: string;
    currencyCode?: string;
    createdBy?: string;
    createdDate?: Date;
    lastModifiedBy?: string;
    lastModifiedDate?: Date;
    displayName?: string;
    file?: File;
    referralCode?: string;
}