import React, { useEffect } from 'react';
import DG from '2gis-maps'

const FooterMap = () => {
    useEffect(() => {
        var map;
        DG.then(function () {
            map = DG.map('map', {
                center: [42.868469281175365, 74.60960471442931],
                zoom: 15
            });
            DG.marker([42.869666471787916, 74.609806599237499]).addTo(map).bindPopup('bruh');
            DG.marker([42.867206705043785, 74.60505403025431]).addTo(map).bindPopup('bruh');
        });
    }, [])
    return (
        <div>
            <div style={ { width: 340, height: 200, borderRadius: 12 } } id="map"></div>
        </div>
    );
};

export default FooterMap;