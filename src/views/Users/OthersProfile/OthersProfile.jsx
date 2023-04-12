import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUserById as getUserByIdService } from "../../../services/UserService";
import { horoscopeAstroCompatibility as horoscopeAstroCompatibilityService } from "../../../services/Apis/HoroscopeAstro";

export const OthersProfile = () => {
  const { id } = useParams();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [horoscopeAstroCompatibility, setHoroscopeAstroCompatibility] =
    useState(null);

  useEffect(() => {
    getUserByIdService(id)
      .then((userId) => {
        setUser(userId);
        setLoading(false);
      })
      .catch((err) => console.error(err));

    //   horoscopeAstroCompatibilityService(currentUser.sunSign.name, "Libra") //Esto iría en el perfil del otro user, para checar compatibilidades
    //   .then((response) => {
    //     console.log(response.data);
    //     setHoroscopeAstroCompatibility(response.data);
    //   })
    //   .catch((err) => console.error(err));
  }, []);

  return <div>{loading ? "Loading..." : <h1>{user.firstName}</h1>}</div>;
};
