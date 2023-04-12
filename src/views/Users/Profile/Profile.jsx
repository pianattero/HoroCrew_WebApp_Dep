import { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import { aztroAPI as aztroAPIService } from "../../../services/Apis/AztroAPI";
import { horoscopeAI as horoscopeAIService } from "../../../services/Apis/HoroscopesAI";
import {
  horoscopeAstroCompatibility as horoscopeAstroCompatibilityService,
  horoscopeAstroInfo as horoscopeAstroInfoService,
} from "../../../services/Apis/HoroscopeAstro";

export const Profile = () => {
  const { currentUser } = useContext(AuthContext);

  const [loading, setloading] = useState(true);
  const [AztroAPI, setAztroAPI] = useState(null);
  const [horoscopeAI, setHoroscopeAI] = useState(null);

  const [horoscopeAstroInfo, sethoroscopeAstroInfo] = useState(null);

  useEffect(() => {
    // AztroAPI(currentUser.sunSign.name.toLowerCase())
    //   .then((response) => {
    //     console.log(response.data);
    //     setAztroAPI(response.data);
    //     setloading(false);
    //   })
    //   .catch((err) => console.error(err));

    // horoscopeAIService({
    //   sign: currentUser.sunSign.name.toLowerCase(),
    //   period: "today",
    //   type: "wellness",
    // })
    //   .then((response) => {
    //     console.log(response.data);
    //     setHoroscopeAI(response.data);
    //   })
    //   .catch((err) => console.error(err));

    horoscopeAstroInfoService(currentUser.sunSign.name.toLowerCase())
      .then((response) => {
        console.log(response.data);
        sethoroscopeAstroInfo(response.data);
        setloading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>
        Profile of {currentUser.firstName} {currentUser.lastName}
      </h1>
      {loading ? (
        "Loading info"
      ) : (
        <div>
          <h3>Info about your sign</h3>
          <p>{horoscopeAstroInfo.about}</p>
        </div>
      )}
    </div>
  );
};
