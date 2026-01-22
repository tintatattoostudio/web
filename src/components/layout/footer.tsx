'use client';

import { STUDIO_INFO } from '@/lib/constants';
import { Map, MapMarker, MarkerContent, MarkerPopup } from '@/components/ui/map';
import { MapPin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  const { lat, lng } = STUDIO_INFO.coordinates;

  return (
    <footer className="border-t border-border/40 bg-muted/30 w-full">
      <div className="container mx-auto px-4 py-12 w-full">
        <div className="flex flex-col md:flex-row gap-8 w-full flex-1">
          {/* Studio Info */}
          <div className="space-y-2 flex-1">
            <h3 className="font-bold text-lg mb-4">{STUDIO_INFO.name}</h3>
            <p className="text-sm text-muted-foreground whitespace-pre-line">
              {STUDIO_INFO.street}
              <br />
              {STUDIO_INFO.city}
              <br />
              {STUDIO_INFO.country}
            </p>
            <div className="flex flex-row gap-2">
              <a
                href={STUDIO_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline transition-all"
              >
                fb
              </a>
              <a
                href={STUDIO_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:underline transition-all"
              >
                ig
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="flex-1">
            <h3 className="font-bold text-lg mb-4">Location</h3>
            <div className="relative w-full h-[400px] rounded-md overflow-hidden border border-border">
              <Map
                center={[lng, lat]}
                zoom={15}
                attributionControl={{ compact: true }}
              >
                <MapMarker longitude={lng} latitude={lat}>
                  <MarkerContent>
                    <div className="relative">
                      <MapPin className="h-8 w-8 text-red-500 fill-red-500" />
                    </div>
                  </MarkerContent>
                </MapMarker>
              </Map>

              {/* Custom Overlay with Address */}
              <div className="absolute top-2 right-2 bg-background/90 backdrop-blur-sm border border-border rounded-md p-3 shadow-lg text-xs max-w-[200px]">
                <p className="font-medium mb-1">{STUDIO_INFO.name}</p>
                <p className="text-muted-foreground mb-2 text-[10px]">
                  {STUDIO_INFO.street}
                  <br />
                  {STUDIO_INFO.city}
                  <br />
                  {STUDIO_INFO.country}
                </p>
                <div className="flex gap-2">
                  <a
                    href={STUDIO_INFO.mapsLinks.google}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    Google
                  </a>
                  <span className="text-muted-foreground">|</span>
                  <a
                    href={STUDIO_INFO.mapsLinks.apple}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600 dark:text-blue-400"
                  >
                    Apple
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} {STUDIO_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
