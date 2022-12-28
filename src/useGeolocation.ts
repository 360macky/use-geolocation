import { useState, useEffect } from 'react';

/**
 * GeolocationData
 * @property latitude - Latitude of the user
 * @property longitude - Longitude of the user
 * @property error - Error message if there is an error
 */
interface GeolocationData {
  latitude: number;
  longitude: number;
  error?: string;
}

/**
 * Hook to get the current location of the user
 * @returns GeolocationData
 * @example
 * const { latitude, longitude, error } = useGeolocation();
 * if (error) {
 *  console.log(error);
 * }
 * console.log(latitude, longitude); // 0 0
 * @returns GeolocationData
 */
export default function useGeolocation(): GeolocationData {
  const [location, setLocation] = useState<GeolocationData>({
    latitude: 0,
    longitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        setLocation({
          error: error.message,
        } as GeolocationData);
      },
    );
  }, []);

  return location;
}
