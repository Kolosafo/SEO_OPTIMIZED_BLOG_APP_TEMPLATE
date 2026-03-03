"use client";

/**
 * Vendor Auth Context
 * Manages vendor authentication state and JWT tokens
 */

import {
	createContext,
	useContext,
	useState,
	useEffect,
	type ReactNode,
} from "react";
import type { VendorAuthState } from "@/types/vendor";

interface VendorAuthContextType extends VendorAuthState {
	login: (vendorId: string, accessToken: string, refreshToken: string) => void;
	logout: () => void;
}

const VendorAuthContext = createContext<VendorAuthContextType | undefined>(
	undefined,
);

const STORAGE_KEYS = {
	VENDOR_ID: "vendor_id",
	ACCESS_TOKEN: "vendor_access_token",
	REFRESH_TOKEN: "vendor_refresh_token",
};

export function VendorAuthProvider({ children }: { children: ReactNode }) {
	const [authState, setAuthState] = useState<VendorAuthState>({
		isAuthenticated: false,
		vendorId: null,
		accessToken: null,
		refreshToken: null,
	});

	// Load auth state from localStorage on mount
	useEffect(() => {
		const vendorId = localStorage.getItem(STORAGE_KEYS.VENDOR_ID);
		const accessToken = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);
		const refreshToken = localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN);

		if (vendorId && accessToken && refreshToken) {
			setAuthState({
				isAuthenticated: true,
				vendorId,
				accessToken,
				refreshToken,
			});
		}
	}, []);

	const login = (
		vendorId: string,
		accessToken: string,
		refreshToken: string,
	) => {
		// Save to localStorage
		localStorage.setItem(STORAGE_KEYS.VENDOR_ID, vendorId);
		localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, accessToken);
		localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, refreshToken);

		// Update state
		setAuthState({
			isAuthenticated: true,
			vendorId,
			accessToken,
			refreshToken,
		});
	};

	const logout = () => {
		// Clear localStorage
		localStorage.removeItem(STORAGE_KEYS.VENDOR_ID);
		localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
		localStorage.removeItem(STORAGE_KEYS.REFRESH_TOKEN);

		// Update state
		setAuthState({
			isAuthenticated: false,
			vendorId: null,
			accessToken: null,
			refreshToken: null,
		});
	};

	return (
		<VendorAuthContext.Provider value={{ ...authState, login, logout }}>
			{children}
		</VendorAuthContext.Provider>
	);
}

export function useVendorAuth() {
	const context = useContext(VendorAuthContext);
	if (context === undefined) {
		throw new Error("useVendorAuth must be used within VendorAuthProvider");
	}
	return context;
}
