import { useEffect, useState } from "react";

export function useHookCurrentLocation() {
  const [location, setLocation] = useState({
    latitude: '',
    longitude: '',
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) =>
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
    console.log(location)
  }, []);

  const currentLocation = {...location}

  return currentLocation;
}
