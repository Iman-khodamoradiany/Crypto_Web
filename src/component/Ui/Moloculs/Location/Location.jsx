import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


function Location() {
    return (
        <MapContainer center={[35.30972, 46.99890]} zoom={16} scrollWheelZoom={false} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                attribution='&copy; <a href="https://frontendi.com">فرانت اندی</a> contributors'
            />
            <Marker position={[35.30972, 46.99890]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Location