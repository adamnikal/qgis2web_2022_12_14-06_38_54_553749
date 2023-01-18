var wms_layers = [];


        var lyr_ESRISatellite_0 = new ol.layer.Tile({
            'title': 'ESRI Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_UKURTUTONG_1 = new ol.format.GeoJSON();
var features_UKURTUTONG_1 = format_UKURTUTONG_1.readFeatures(json_UKURTUTONG_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UKURTUTONG_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UKURTUTONG_1.addFeatures(features_UKURTUTONG_1);
var lyr_UKURTUTONG_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UKURTUTONG_1, 
                style: style_UKURTUTONG_1,
                interactive: true,
                title: '<img src="styles/legend/UKURTUTONG_1.png" /> UKUR TUTONG'
            });
var format_SHOP_2 = new ol.format.GeoJSON();
var features_SHOP_2 = format_SHOP_2.readFeatures(json_SHOP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SHOP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SHOP_2.addFeatures(features_SHOP_2);
var lyr_SHOP_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SHOP_2, 
                style: style_SHOP_2,
                interactive: true,
                title: '<img src="styles/legend/SHOP_2.png" /> SHOP'
            });
var format_SEKOLAHRENDAHMUDAHASHIM_3 = new ol.format.GeoJSON();
var features_SEKOLAHRENDAHMUDAHASHIM_3 = format_SEKOLAHRENDAHMUDAHASHIM_3.readFeatures(json_SEKOLAHRENDAHMUDAHASHIM_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SEKOLAHRENDAHMUDAHASHIM_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SEKOLAHRENDAHMUDAHASHIM_3.addFeatures(features_SEKOLAHRENDAHMUDAHASHIM_3);
var lyr_SEKOLAHRENDAHMUDAHASHIM_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SEKOLAHRENDAHMUDAHASHIM_3, 
                style: style_SEKOLAHRENDAHMUDAHASHIM_3,
                interactive: true,
                title: '<img src="styles/legend/SEKOLAHRENDAHMUDAHASHIM_3.png" /> SEKOLAH RENDAH MUDA HASHIM'
            });
var format_RUMAH_4 = new ol.format.GeoJSON();
var features_RUMAH_4 = format_RUMAH_4.readFeatures(json_RUMAH_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAH_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAH_4.addFeatures(features_RUMAH_4);
var lyr_RUMAH_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RUMAH_4, 
                style: style_RUMAH_4,
                interactive: true,
                title: '<img src="styles/legend/RUMAH_4.png" /> RUMAH'
            });
var format_POLIS_5 = new ol.format.GeoJSON();
var features_POLIS_5 = format_POLIS_5.readFeatures(json_POLIS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_POLIS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POLIS_5.addFeatures(features_POLIS_5);
var lyr_POLIS_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_POLIS_5, 
                style: style_POLIS_5,
                interactive: true,
                title: '<img src="styles/legend/POLIS_5.png" /> POLIS'
            });
var format_OG_6 = new ol.format.GeoJSON();
var features_OG_6 = format_OG_6.readFeatures(json_OG_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OG_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OG_6.addFeatures(features_OG_6);
var lyr_OG_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_OG_6, 
                style: style_OG_6,
                interactive: true,
                title: '<img src="styles/legend/OG_6.png" /> OG'
            });
var format_GOVERNMENT_7 = new ol.format.GeoJSON();
var features_GOVERNMENT_7 = format_GOVERNMENT_7.readFeatures(json_GOVERNMENT_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GOVERNMENT_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GOVERNMENT_7.addFeatures(features_GOVERNMENT_7);
var lyr_GOVERNMENT_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_GOVERNMENT_7, 
                style: style_GOVERNMENT_7,
                interactive: true,
                title: '<img src="styles/legend/GOVERNMENT_7.png" /> GOVERNMENT'
            });
var format_CHUNGHWA_8 = new ol.format.GeoJSON();
var features_CHUNGHWA_8 = format_CHUNGHWA_8.readFeatures(json_CHUNGHWA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CHUNGHWA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CHUNGHWA_8.addFeatures(features_CHUNGHWA_8);
var lyr_CHUNGHWA_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CHUNGHWA_8, 
                style: style_CHUNGHWA_8,
                interactive: true,
                title: '<img src="styles/legend/CHUNGHWA_8.png" /> CHUNG HWA'
            });
var format_BUILDINGS_9 = new ol.format.GeoJSON();
var features_BUILDINGS_9 = format_BUILDINGS_9.readFeatures(json_BUILDINGS_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUILDINGS_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUILDINGS_9.addFeatures(features_BUILDINGS_9);
var lyr_BUILDINGS_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BUILDINGS_9, 
                style: style_BUILDINGS_9,
                interactive: true,
                title: '<img src="styles/legend/BUILDINGS_9.png" /> BUILDINGS'
            });
var format_BOMBA_10 = new ol.format.GeoJSON();
var features_BOMBA_10 = format_BOMBA_10.readFeatures(json_BOMBA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BOMBA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BOMBA_10.addFeatures(features_BOMBA_10);
var lyr_BOMBA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BOMBA_10, 
                style: style_BOMBA_10,
                interactive: true,
                title: '<img src="styles/legend/BOMBA_10.png" /> BOMBA'
            });

lyr_ESRISatellite_0.setVisible(true);lyr_UKURTUTONG_1.setVisible(true);lyr_SHOP_2.setVisible(true);lyr_SEKOLAHRENDAHMUDAHASHIM_3.setVisible(true);lyr_RUMAH_4.setVisible(true);lyr_POLIS_5.setVisible(true);lyr_OG_6.setVisible(true);lyr_GOVERNMENT_7.setVisible(true);lyr_CHUNGHWA_8.setVisible(true);lyr_BUILDINGS_9.setVisible(true);lyr_BOMBA_10.setVisible(true);
var layersList = [lyr_ESRISatellite_0,lyr_UKURTUTONG_1,lyr_SHOP_2,lyr_SEKOLAHRENDAHMUDAHASHIM_3,lyr_RUMAH_4,lyr_POLIS_5,lyr_OG_6,lyr_GOVERNMENT_7,lyr_CHUNGHWA_8,lyr_BUILDINGS_9,lyr_BOMBA_10];
lyr_UKURTUTONG_1.set('fieldAliases', {'UKUR TUT': 'UKUR TUT', 'BMG': 'BMG', 'PENUMBURAN': 'PENUMBURAN', 'HALAKIBLAT': 'HALAKIBLAT', 'LTS': 'LTS', 'KAUNTER': 'KAUNTER', });
lyr_SHOP_2.set('fieldAliases', {'SHOP': 'SHOP', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', });
lyr_SEKOLAHRENDAHMUDAHASHIM_3.set('fieldAliases', {'BANGUNAN': 'BANGUNAN', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', });
lyr_RUMAH_4.set('fieldAliases', {'BANGUNAN': 'BANGUNAN', 'TYPE': 'TYPE', });
lyr_POLIS_5.set('fieldAliases', {'TYPE': 'TYPE', 'BANGUNAN': 'BANGUNAN', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', 'STATUS': 'STATUS', });
lyr_OG_6.set('fieldAliases', {'BANGUNAN': 'BANGUNAN', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ADDRESS': 'ADDRESS', });
lyr_GOVERNMENT_7.set('fieldAliases', {'UKUR TUT': 'UKUR TUT', 'BMG': 'BMG', 'PENUMBURAN': 'PENUMBURAN', 'HALAKIBLAT': 'HALAKIBLAT', 'LTS': 'LTS', 'KAUNTER': 'KAUNTER', });
lyr_CHUNGHWA_8.set('fieldAliases', {'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', });
lyr_BUILDINGS_9.set('fieldAliases', {'BANGUNAN': 'BANGUNAN', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ADDRESS': 'ADDRESS', 'PHONE NO': 'PHONE NO', });
lyr_BOMBA_10.set('fieldAliases', {'TYPE': 'TYPE', 'STATUS': 'STATUS', 'ADDRESS': 'ADDRESS', 'PHONE': 'PHONE', 'BANGUNAN': 'BANGUNAN', });
lyr_UKURTUTONG_1.set('fieldImages', {'UKUR TUT': '', 'BMG': '', 'PENUMBURAN': '', 'HALAKIBLAT': '', 'LTS': '', 'KAUNTER': '', });
lyr_SHOP_2.set('fieldImages', {'SHOP': '', 'TYPE': '', 'STATUS': '', 'ADDRESS': '', 'PHONE': '', });
lyr_SEKOLAHRENDAHMUDAHASHIM_3.set('fieldImages', {'BANGUNAN': '', 'TYPE': '', 'STATUS': '', 'ADDRESS': '', 'PHONE': '', });
lyr_RUMAH_4.set('fieldImages', {'BANGUNAN': '', 'TYPE': '', });
lyr_POLIS_5.set('fieldImages', {'TYPE': '', 'BANGUNAN': '', 'ADDRESS': '', 'PHONE': '', 'STATUS': '', });
lyr_OG_6.set('fieldImages', {'BANGUNAN': '', 'TYPE': '', 'STATUS': '', 'ADDRESS': '', });
lyr_GOVERNMENT_7.set('fieldImages', {'UKUR TUT': '', 'BMG': '', 'PENUMBURAN': '', 'HALAKIBLAT': '', 'LTS': '', 'KAUNTER': '', });
lyr_CHUNGHWA_8.set('fieldImages', {'TYPE': '', 'STATUS': '', 'ADDRESS': '', 'PHONE': '', });
lyr_BUILDINGS_9.set('fieldImages', {'BANGUNAN': '', 'TYPE': '', 'STATUS': '', 'ADDRESS': '', 'PHONE NO': '', });
lyr_BOMBA_10.set('fieldImages', {'TYPE': '', 'STATUS': '', 'ADDRESS': '', 'PHONE': '', 'BANGUNAN': '', });
lyr_UKURTUTONG_1.set('fieldLabels', {'UKUR TUT': 'inline label', 'BMG': 'inline label', 'PENUMBURAN': 'inline label', 'HALAKIBLAT': 'inline label', 'LTS': 'inline label', 'KAUNTER': 'inline label', });
lyr_SHOP_2.set('fieldLabels', {'SHOP': 'inline label', 'TYPE': 'inline label', 'STATUS': 'inline label', 'ADDRESS': 'inline label', 'PHONE': 'inline label', });
lyr_SEKOLAHRENDAHMUDAHASHIM_3.set('fieldLabels', {'BANGUNAN': 'inline label', 'TYPE': 'inline label', 'STATUS': 'inline label', 'ADDRESS': 'inline label', 'PHONE': 'inline label', });
lyr_RUMAH_4.set('fieldLabels', {'BANGUNAN': 'inline label', 'TYPE': 'inline label', });
lyr_POLIS_5.set('fieldLabels', {'TYPE': 'inline label', 'BANGUNAN': 'inline label', 'ADDRESS': 'inline label', 'PHONE': 'inline label', 'STATUS': 'inline label', });
lyr_OG_6.set('fieldLabels', {'BANGUNAN': 'inline label', 'TYPE': 'inline label', 'STATUS': 'inline label', 'ADDRESS': 'inline label', });
lyr_GOVERNMENT_7.set('fieldLabels', {'UKUR TUT': 'inline label', 'BMG': 'inline label', 'PENUMBURAN': 'inline label', 'HALAKIBLAT': 'inline label', 'LTS': 'inline label', 'KAUNTER': 'inline label', });
lyr_CHUNGHWA_8.set('fieldLabels', {'TYPE': 'inline label', 'STATUS': 'inline label', 'ADDRESS': 'inline label', 'PHONE': 'inline label', });
lyr_BUILDINGS_9.set('fieldLabels', {'BANGUNAN': 'inline label', 'TYPE': 'inline label', 'STATUS': 'inline label', 'ADDRESS': 'inline label', 'PHONE NO': 'inline label', });
lyr_BOMBA_10.set('fieldLabels', {'TYPE': 'inline label', 'STATUS': 'inline label', 'ADDRESS': 'inline label', 'PHONE': 'inline label', 'BANGUNAN': 'inline label', });
lyr_BOMBA_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});