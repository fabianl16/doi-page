import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';

import { LngLat, Map, Marker, Popup } from 'mapbox-gl';
import { fadeAnimation } from '../../animations/fade-animations';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  animations: [fadeAnimation],
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements AfterViewInit, OnDestroy{

  @ViewChild('map')
  public divMap?: ElementRef;

  public currentlngLat: LngLat = new LngLat(-109.90764974412484, 22.891672822991424);
  public map?: Map;
  public zoom: number = 13;


  ngAfterViewInit(): void {

    if( !this.divMap ) throw 'El elemento HTML no fue encontrado';

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentlngLat, // starting position [lng, lat]
      zoom: this.zoom,
      minZoom: 3
      });

      this.createMarker();

      this.mapListeners();
  }

  ngOnDestroy(): void {
    this.map?.remove()
  }

  mapListeners(){
    if ( !this.map ) throw 'Mapa no inicializado';
    this.map.on('zoom',  (ev) =>{
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend',  (ev) =>{
      if( this.map!.getZoom() < 18 ) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () =>{
      this.currentlngLat = this.map!.getCenter();
    });

  }

  createMarker(){
    if( !this.map )return;
    const color = 'red';
    const lngLat = new LngLat (-109.90793195943124, 22.891799241189204);
    this.addMarker( lngLat, color);
  }

  addMarker( lngLat: LngLat, color: string ){
    if( !this.map )return;

    const popup = new Popup({ offset: 25 }).setText(
      'Desarrolladora de obra integral de Los Cabos'
    );

    const marker = new Marker({
      color: color,
      draggable: false
    })
    .setLngLat( lngLat )
    .setPopup(popup)
    .addTo( this.map );
  }

  flyTo(){
    this.map?.flyTo({
      zoom: 17,
      center: new LngLat (-109.90793195943124, 22.891799241189204)
    })
  }
}
