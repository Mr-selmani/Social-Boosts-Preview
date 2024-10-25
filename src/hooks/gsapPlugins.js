'use client';
import React, { useEffect, useState } from 'react';

import gsap from "gsap";

/**
 * Call any GSAP plugins
 */
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useGsapPlugins = ()=> {
    const [pluginsLoading, setPluginsLoading] = useState(true);
    const [pluginsLoaded, setPluginsLoaded] = useState(false);

    useEffect(() => {
        /**
         * Register all GSAP plugins here
         */
        gsap.registerPlugin(ScrollTrigger);

        setPluginsLoaded(true);
        setPluginsLoading(false);
    }, [pluginsLoading]);

    return { pluginsLoading, pluginsLoaded };
}