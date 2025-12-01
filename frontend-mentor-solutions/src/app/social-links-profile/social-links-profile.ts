import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SocialLink {
  name: string;
  url: string;
}

interface ProfileData {
  name: string;
  location: string;
  bio: string;
  socialLinks: SocialLink[];
}

@Component({
  selector: 'app-social-links-profile',
  imports: [CommonModule],
  templateUrl: './social-links-profile.html',
  styleUrl: './social-links-profile.css',
})
export class SocialLinksProfile {
  profileData: ProfileData = {
    name: 'Jessica Randall',
    location: 'London, United Kingdom',
    bio: '"Front-end developer and avid reader."',
    socialLinks: [
      {
        name: 'GitHub',
        url: 'https://github.com'
      },
      {
        name: 'Frontend Mentor',
        url: 'https://www.frontendmentor.io'
      },
      {
        name: 'LinkedIn',
        url: 'https://linkedin.com'
      },
      {
        name: 'Twitter',
        url: 'https://twitter.com'
      },
      {
        name: 'Instagram',
        url: 'https://instagram.com'
      }
    ]
  };
}
