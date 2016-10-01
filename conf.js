{
	"AppConf": {
		"mapConf":{
			"defaultProvider":"MapBox",
			"mapView":{
				"latitude":45.1842206,
				"longitude":5.680523,
				"zoomLevel":13,
				"maxZoom":15
			},
			"mapProvider":{
				"GoogleMap":{
					"mode":"ROADMAP"
				},
				"MapBox":{
					"accessToken":"sk.eyJ1IjoiYmFrZW5vb3IiLCJhIjoiY2l0YjNjczhpMDAxMzJ1cDc5aXVxeHZ5NiJ9.8YzFSaP-znz8JUeHYybuTg",
					"userId":"bakenoor.1eh9o2c2"
				}
			}
		}
	},
	"DataConf": {
		"Test1": {
			"type": "MarkerLayerConfig",
			"name": "Test1",
			"color": "FE7569",
			"latCol": "caplat",
			"longCol": "caplong",
			"initialShow":true,
			"markerDescription": "The latitude and longitude for <country> is <caplat> and <caplong> respectively",
			"description": "Description about Test 1",
			"dataSource": {
				"type": "SPARQLDataSource",
				"url": "https://dbpedia.org/sparql",
				"query": "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>\r\n\tPREFIX geo: <http://www.w3.org/2003/01/geo/wgs84_pos#>\r\n\tPREFIX dbo: <http://dbpedia.org/ontology/>\r\n\r\n\tSELECT distinct ?country ?capital ?caplat ?caplong\r\n\tWHERE {\r\n\t  ?country rdf:type dbo:Country .\r\n\t  ?country  dbo:capital ?capital .\r\n\t  ?capital geo:lat ?caplat ;\r\n\t     geo:long ?caplong .\r\n\t  \r\n\t}\r\n\tORDER BY ?country\r\n\tLIMIT 10"
			}
		},
		"Test2": {
			"type": "MarkerLayerConfig",
			"name": "Test2",
			"url": "/img/tree/tree-24-32.png",
			"latCol": "lat",
			"longCol": "long",
			"initialShow":true,
			"markerDescription": "The latitude and longitude for tree with <code> is <lat> and <long> respectively",
			"description": "Description about Test 2",
			"dataSource": {
				"type": "SPARQLDataSource",
				"url": "http://data.mondeca.com/egc2017/sparql",
				"query": "PREFIX wgs84_pos:<http:\/\/www.w3.org\/2003\/01\/geo\/wgs84_pos#>\r\nPREFIX rdf: <http:\/\/www.w3.org\/1999\/02\/22-rdf-syntax-ns#>\r\nSELECT ?lat ?long ?code\r\nWHERE {\r\n  ?subject rdf:type <http:\/\/linkedgeodata.org\/ontology\/Tree>;\r\n\t\t wgs84_pos:lat ?lat;\r\n\t\t wgs84_pos:long ?long;\r\n\t\t <http:\/\/data.lof.com\/def\/tonto#code> ?code\r\n}\r\nLIMIT 25"
			}
		},
		"Test3": {
			"type": "LayerConfig",
			"name": "Test3",
			"initialShow":false,
			"description": "Description about Test 3",
			"dataSource": {
				"type": "GeoJSONDataSource",
				"url": "https://raw.githubusercontent.com/mledoze/countries/master/data/fra.geo.json"
			}
		},
		"Grenoble Decoupage": {
			"type": "LayerConfig",
			"name": "Grenoble Decoupage",
			"initialShow":true,
			"description": "Description about Grenoble Decoupage",
			"dataSource": {
				"type": "GeoJSONDataSource",
				"url": "https://raw.githubusercontent.com/noorbakerally/EGC2017ConfigurationFile/master/SECTEURS_EPSG4326.json"
			}
		},
		"Grenoble Velo": { 
		     "type": "LayerConfig",
		      "name": "Vélos Grenoble",
		       "initialShow":false,
		       "description": "Ways of Bikes around Grenoble",
		       "dataSource": {
		               "type": "GeoJSONDataSource",
		                "url":"https://raw.githubusercontent.com/gatemezing/EGC2017ConfigurationFile/master/velo.geojson"
		       }
		  }
	}
}
