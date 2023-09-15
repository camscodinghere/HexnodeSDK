type Params = {
    apiKey: string;
    portal: string;
    name: string;
    description: string;
    ios?: any;
    android?: {
        password?: {
            passcode_requirement?: 'simple' | 'numbers' | 'alphanumeric' | 'alphabet' | 'complexvalue';
            min_password_complexity?: 'none' | 'low' | 'medium' | 'high';
            min_length?: number;
            max_pinage_in_days?: number;
            max_inactivity?: number;
            pin_history?: number;
            max_failed_attempts?: number;
            min_uppercase_letters?: 1 | 2 | 3 | 4 | 5;
            min_lowercase_letters?: 1 | 2 | 3 | 4 | 5;
            min_non_alphabets?: 1 | 2 | 3 | 4 | 5;
            min_num_letters?: 1 | 2 | 3 | 4 | 5;
            min_symbols?: 1 | 2 | 3 | 4 | 5;
        };
        restrictions?: {
            allow_camera?: boolean;
            allow_usb_mass_storage?: boolean;
            allow_network_time?: boolean;
            allow_wifi?: boolean;
            enforce_wifi?: boolean;
            allow_bluetooth?: boolean;
            allow_data_network?: boolean;
            allow_bgdata_sync?: boolean;
            allow_auto_background_sync?: boolean;
            allow_mobile_app?: boolean;
            allow_usb_tethering?: boolean;
            allow_mock_locations?: boolean;
            allow_wireless_location?: boolean;
            allow_gps_location?: boolean;
            allow_non_google_app?: boolean;
            enforce_app_verification?: boolean;
            allow_backup_google?: boolean;
            allow_auto_restore?: boolean;
            allow_roaming?: boolean;
            enforce_device_encrypt?: boolean;
            disable_keyguard?: boolean;
            allow_password_visible?: boolean;
            enforce_gps_location?: boolean;
            allow_mdm_removal?: boolean;
        };
        wifi?: {
            service_set_identifier: string;
            autojoin?: boolean;
            hidden_network?: boolean;
            security_type: 'none' | 'wep' | 'wpa' | 'eap';
            password?: string;
            eap_type?: 'peap' | 'ttls' | 'pwd';
            user_name?: string;
            enterprise_password?: string | null;
            phase2_authentication?: 'None' | 'PAP' | 'MSCHAP' | 'MSCHAPv2' | 'GTC';
            outer_identity?: string;
        };
        email?: {
            account_name?: string | null;
            account_description: string;
            incoming_account_type?: 'pop3' | 'imap';
            email_address?: string | null;
            incoming_server_host_name: string;
            incoming_server_port?: number;
            incoming_server_username?: number | string | null;
            incoming_password?: string | null;
            incoming_server_use_ssl?: boolean;
            incoming_server_use_tls?: boolean;
            incoming_server_use_certificate?: boolean;
            out_account_type: 'pop3' | 'smtp';
            out_server_host_name: string;
            out_server_port?: number;
            out_server_username?: string | null;
            out_password?: string | null;
            out_server_use_ssl?: boolean;
            out_server_use_tls?: boolean;
            out_server_use_certificate?: boolean;
        };
        activesync?: {
            account_name?: string;
            host: string;
            domain?: string | null;
            email_address: string;
            username: string;
            password?: string | null;
            no_past_days_to_sync?: 'auto' | 'manual' | '15' | '30' | '60' | '120' | '240';
            use_ssl?: boolean;
        };
        applock?: {
            apps?: {
                id: number;
                hide: boolean;
            }[];
            toggle_wifi?: boolean;
            allow_wifi?: boolean;
            enable_hexnode_browser?: boolean;
            auto_launch_app?: number;
            auto_launch_delay?: number;
            allow_change_brightness?: boolean;
            brightness_level?: number;
            keep_screen_on?: boolean;
            allow_bluetooth?: boolean;
            allow_user_location_checkin?: boolean;
            kiosk_password?: string;
        };
        wallpaper?: {
            mobile_wallpaper: string;
            tablet_wallpaper: string;
        };
    };
    app_management?: {
        whitelist_apps?: {
            app?: number[];
            group?: number[];
        };
        blacklist_apps?: {
            app?: number[];
            group?: number[];
        };
        mandatory_apps?: {
            app?: number[];
            group?: number[];
        };
        catalogs?: any;
    };
    general_settings?: {
        location_settings?: {
            trackingdisabled?: boolean;
            interval_minutes?: number;
        };
    };
    policy_targets?: {
        users?: number[];
        devices?: number[];
        usergroups?: number[];
        devicegroups?: number[];
    };
};
/**
 * Creates a new policy
 *
 * ------
 *
 *    apiKey - Hexnode API key
 *
 *    portal - Portal name to use for hexnode url
 *
 *    name - Policy name
 *
 *    description - Policy description
 *
 *    ios - OPTIONAL Object, see link for details
 *
 *    https://www.hexnode.com/mobile-device-management/developers/policies/ios-policies/
 *
 *    android - OPTIONAL Object, see link for details
 *
 *    https://www.hexnode.com/mobile-device-management/developers/policies/android-policies/
 *
 *    app_management - OPTIONAL Can contain the keys: [whitelist_apps, blacklist_apps, mandatory_apps, catalogs]
 * where the value of the first 3 listed keys (if present) is of the format:
 *
 *    {
 *
 *      app: Array of app IDs to add to policy
 *      group: Array of app group IDs to add to policy
 *
 *    }
 *
 *    EXAMPLE
 *
 *      app_management : {
 *          whitelist_apps : { app : [1], group : [0, 11] }
 *      }
 *
 *    general_settings - OPTIONAL of the format
 *
 *    {
 *
 *      location_settings : {
 *          trackingdisabled : boolean
 *          interval_minutes : number (integer)
 *      }
 *
 *    }
 *
 *    policy_targets - OPTIONAL Can contain keys: [users, devices, usergroups, devicegroups]
 * where the value of each is an array of IDs
 *
 * @returns Response from the Hexnode API
 */
export default function (inParams: Params): Promise<{
    status: any;
    data: any;
}>;
export {};
