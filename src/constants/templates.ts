export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      
      <h2>Project Overview</h2>
      <p><strong>Client:</strong> [Client Name/Company]</p>
      <p><strong>Project Title:</strong> [Project Name]</p>
      <p><strong>Proposal Date:</strong> [Date]</p>
      <p><strong>Prepared by:</strong> [Your Name/Company]</p>

      <h2>Executive Summary</h2>
      <p>Brief description of the proposed software development project, highlighting key objectives and expected outcomes.</p>

      <h2>Project Scope</h2>
      <h3>Included Services:</h3>
      <ul>
        <li>Custom software development</li>
        <li>UI/UX design and implementation</li>
        <li>Database design and setup</li>
        <li>API development and integration</li>
        <li>Testing and quality assurance</li>
        <li>Deployment and maintenance setup</li>
      </ul>

      <h3>Deliverables:</h3>
      <ul>
        <li>Source code and documentation</li>
        <li>Database schema and setup scripts</li>
        <li>User manuals and training materials</li>
        <li>Deployment guides</li>
      </ul>

      <h2>Timeline & Milestones</h2>
      <table>
        <tr><th>Phase</th><th>Duration</th><th>Deliverables</th></tr>
        <tr><td>Planning & Analysis</td><td>2 weeks</td><td>Requirements document, project plan</td></tr>
        <tr><td>Design & Architecture</td><td>3 weeks</td><td>Technical specifications, wireframes</td></tr>
        <tr><td>Development</td><td>8 weeks</td><td>Working software, source code</td></tr>
        <tr><td>Testing & QA</td><td>2 weeks</td><td>Test reports, bug fixes</td></tr>
        <tr><td>Deployment</td><td>1 week</td><td>Live application, documentation</td></tr>
      </table>

      <h2>Budget Breakdown</h2>
      <table>
        <tr><th>Service</th><th>Hours</th><th>Rate</th><th>Total</th></tr>
        <tr><td>Development</td><td>160</td><td>$75/hr</td><td>$12,000</td></tr>
        <tr><td>Design</td><td>40</td><td>$65/hr</td><td>$2,600</td></tr>
        <tr><td>Testing</td><td>32</td><td>$70/hr</td><td>$2,240</td></tr>
        <tr><td>Project Management</td><td>24</td><td>$85/hr</td><td>$2,040</td></tr>
        <tr><td><strong>Total</strong></td><td><strong>256</strong></td><td></td><td><strong>$18,880</strong></td></tr>
      </table>

      <h2>Technology Stack</h2>
      <ul>
        <li><strong>Frontend:</strong> React, TypeScript, Tailwind CSS</li>
        <li><strong>Backend:</strong> Node.js, Express, PostgreSQL</li>
        <li><strong>Deployment:</strong> AWS/Vercel, Docker</li>
        <li><strong>Tools:</strong> Git, Jira, Figma</li>
      </ul>

      <h2>Next Steps</h2>
      <ol>
        <li>Client review and feedback (2 business days)</li>
        <li>Contract signing and deposit payment</li>
        <li>Kickoff meeting and project initiation</li>
        <li>Weekly progress updates and milestone reviews</li>
      </ol>
      `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p><strong>[Your Full Name]</strong></p>
      <p>[Your Job Title]</p>
      <p>[Your Company Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Email Address] | [Phone Number]</p>
      <p>[Date]</p>

      <p><strong>[Recipient's Full Name]</strong></p>
      <p>[Recipient's Job Title]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h1>Subject: [Brief Description of Letter Purpose]</h1>

      <p>Dear [Recipient's Name or "Sir/Madam"],</p>

      <h2>Introduction</h2>
      <p>I am writing in my capacity as [your position] at [your company] to [state the main purpose of the letter]. This correspondence addresses [brief overview of the topic].</p>

      <h2>Background Information</h2>
      <p>[Provide relevant context or background information. Include dates, previous communications, or existing agreements.]</p>

      <h2>Main Points</h2>
      <p>The following key points require your attention:</p>
      <ul>
        <li><strong>Point 1:</strong> [Detailed explanation of first important point]</li>
        <li><strong>Point 2:</strong> [Detailed explanation of second important point]</li>
        <li><strong>Point 3:</strong> [Detailed explanation of third important point]</li>
      </ul>

      <h2>Proposed Action</h2>
      <p>To move forward effectively, I propose the following actions:</p>
      <ol>
        <li>[First recommended action with timeline]</li>
        <li>[Second recommended action with timeline]</li>
        <li>[Third recommended action with timeline]</li>
      </ol>

      <h2>Benefits & Impact</h2>
      <p>Implementing these recommendations will result in:</p>
      <ul>
        <li>[Specific benefit or positive outcome]</li>
        <li>[Specific benefit or positive outcome]</li>
        <li>[Specific benefit or positive outcome]</li>
      </ul>

      <h2>Conclusion & Next Steps</h2>
      <p>I appreciate your attention to this matter and look forward to your response. Please contact me at your earliest convenience to discuss this further or to schedule a meeting.</p>
      <p>I remain available to provide any additional information you may require.</p>

      <p>Sincerely,</p>
      <br>
      <p><strong>[Your Full Name]</strong></p>
      <p>[Your Job Title]</p>
      <p>[Your Company Name]</p>
      <p>[Phone Number]</p>
      <p>[Email Address]</p>
      `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Full Name]</h1>
      <p style="text-align: center; border-bottom: 2px solid #333; padding-bottom: 10px;">
        <strong>[Your Phone Number]</strong> | <strong>[Your Email Address]</strong> | <strong>[City, State]</strong> | <strong>[LinkedIn/Profile URL]</strong>
      </p>

      <h2>Professional Summary</h2>
      <p><em>[Write a compelling 3-4 sentence summary highlighting your years of experience, key skills, and career goals. Focus on what you bring to employers.]</em></p>

      <h2>Work Experience</h2>
      
      <h3>[Current/Most Recent Job Title]</h3>
      <p><em>[Company Name], [City, State] | [Start Date] - [End Date]</em></p>
      <ul>
        <li>[Achievement/Responsibility - Start with strong action verbs like "Led", "Developed", "Improved"]</li>
        <li>[Quantified achievement - Include metrics: "Increased sales by 35%", "Reduced costs by 20%"]</li>
        <li>[Key responsibility with impact - Focus on results and leadership]</li>
        <li>[Technical skill demonstration - Show specific technologies or tools used]</li>
      </ul>

      <h3>[Previous Job Title]</h3>
      <p><em>[Previous Company Name], [City, State] | [Start Date] - [End Date]</em></p>
      <ul>
        <li>[Key achievement or responsibility]</li>
        <li>[Technical or soft skill demonstration]</li>
        <li>[Team collaboration or leadership example]</li>
      </ul>

      <h2>Education</h2>
      <table style="width: 100%; border-collapse: collapse;">
        <tr style="background-color: #f5f5f5;">
          <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Degree/Certificate</th>
          <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Institution</th>
          <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">Year</th>
          <th style="padding: 8px; text-align: left; border: 1px solid #ddd;">GPA/Honors</th>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;">[Degree Name]</td>
          <td style="padding: 8px; border: 1px solid #ddd;">[University Name]</td>
          <td style="padding: 8px; border: 1px solid #ddd;">[Graduation Year]</td>
          <td style="padding: 8px; border: 1px solid #ddd;">[GPA/Honors]</td>
        </tr>
      </table>

      <h2>Skills & Competencies</h2>
      <h3>Technical Skills</h3>
      <ul>
        <li><strong>Languages:</strong> [Language 1], [Language 2], [Language 3]</li>
        <li><strong>Frameworks:</strong> [Framework 1], [Framework 2], [Framework 3]</li>
        <li><strong>Tools:</strong> [Tool 1], [Tool 2], [Tool 3], [Tool 4]</li>
        <li><strong>Databases:</strong> [Database 1], [Database 2]</li>
      </ul>

      <h3>Professional Skills</h3>
      <ul>
        <li>[Communication skill with example]</li>
        <li>[Leadership/Teamwork skill with example]</li>
        <li>[Problem-solving skill with example]</li>
        <li>[Project management skill with example]</li>
      </ul>

      <h2>Certifications & Awards</h2>
      <ul>
        <li><strong>[Certification Name]</strong> - [Issuing Organization], [Date Earned]</li>
        <li><strong>[Award/Recognition]</strong> - [Organization], [Date]</li>
      </ul>

      <h2>Professional Development</h2>
      <ul>
        <li>[Workshop/Conference Name] - [Organization], [Date]</li>
        <li>[Course/Certification] - [Platform/Institution], [Date]</li>
      </ul>
      `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p><strong>[Your Full Name]</strong></p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Phone Number] | [Email Address]</p>
      <p>[LinkedIn URL] | [Portfolio URL]</p>
      <p>[Date]</p>

      <p><strong>[Hiring Manager's Name]</strong></p>
      <p>[Their Job Title]</p>
      <p><strong>[Company Name]</strong></p>
      <p>[Company Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h1>Application for [Job Title] Position</h1>

      <p>Dear [Hiring Manager's Name or "Hiring Team"],</p>

      <h2>Opening Statement</h2>
      <p>I am excited to apply for the <strong>[Job Title]</strong> position at <strong>[Company Name]</strong> as advertised. With my [number] years of experience in [your field/industry] and proven track record in [key skill/expertise], I am confident I would be a valuable addition to your team.</p>

      <h2>Professional Background</h2>
      <p>In my current role as [Your Current Job Title] at [Current Company Name], I have successfully:</p>
      <ul>
        <li>[Specific achievement with quantifiable results]</li>
        <li>[Key responsibility that demonstrates relevant skills]</li>
        <li>[Leadership or project management example]</li>
        <li>[Technical skill or tool proficiency demonstration]</li>
      </ul>

      <p>Previously, as [Previous Job Title] at [Previous Company Name], I [describe another relevant achievement or skill that matches the job requirements].</p>

      <h2>Why [Company Name]?</h2>
      <p>What particularly attracts me to [Company Name] is:</p>
      <ul>
        <li><strong>Innovation:</strong> Your [specific project/product/initiative] demonstrates cutting-edge approach to [industry/field]</li>
        <li><strong>Company Culture:</strong> [Company Name]'s commitment to [specific value or initiative] aligns perfectly with my professional values</li>
        <li><strong>Growth Opportunities:</strong> The [specific opportunity or challenge] mentioned in the job description matches my career goals</li>
      </ul>

      <h2>Skills & Qualifications</h2>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background-color: #f0f8ff;">
          <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Technical Skills</th>
          <th style="padding: 10px; text-align: left; border: 1px solid #ddd;">Soft Skills</th>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; vertical-align: top;">
            <ul>
              <li>[Primary Technical Skill]</li>
              <li>[Secondary Technical Skill]</li>
              <li>[Relevant Tool/Software]</li>
              <li>[Programming Language/Framework]</li>
            </ul>
          </td>
          <td style="padding: 10px; border: 1px solid #ddd; vertical-align: top;">
            <ul>
              <li>[Communication Skill]</li>
              <li>[Leadership/Teamwork Skill]</li>
              <li>[Problem-Solving Skill]</li>
              <li>[Project Management Skill]</li>
            </ul>
          </td>
        </tr>
      </table>

      <h2>Next Steps</h2>
      <p>I would welcome the opportunity to discuss how my background, skills, and enthusiasm align with the needs of your team. I am available for an interview at your earliest convenience and can be reached at [phone number] or [email address].</p>
      <p>Thank you for considering my application. I look forward to the possibility of contributing to [Company Name]'s continued success.</p>

      <p>Sincerely,</p>
      <br>
      <p><strong>[Your Full Name]</strong></p>
      <p>[Your Current Job Title]</p>
      <p>[Phone Number]</p>
      <p>[Email Address]</p>
      `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p><strong>[Your Full Name]</strong></p>
      <p>[Your Job Title/Position]</p>
      <p>[Your Company/Organization Name]</p>
      <p>[Your Address]</p>
      <p>[City, State, ZIP Code]</p>
      <p>[Email Address] | [Phone Number]</p>
      <p style="margin-top: 20px;">[Date]</p>

      <p style="margin-top: 30px;"><strong>[Recipient's Full Name]</strong></p>
      <p>[Recipient's Job Title/Position]</p>
      <p>[Company/Organization Name]</p>
      <p>[Company Address]</p>
      <p>[City, State, ZIP Code]</p>

      <h1 style="text-align: center; margin: 40px 0; text-decoration: underline;">[Letter Subject/Title]</h1>

      <p>Dear [Recipient's Name or appropriate salutation],</p>

      <h2>Introduction</h2>
      <p>I am writing to [clearly state the main purpose of your letter in 1-2 sentences]. [Provide brief context or background if needed].</p>

      <h2>Main Content</h2>
      <p>[Develop your main message with supporting details. Include specific information, facts, or examples that support your purpose.]</p>

      <h3>Key Points:</h3>
      <ul>
        <li><strong>Point 1:</strong> [Detailed explanation of first important point]</li>
        <li><strong>Point 2:</strong> [Detailed explanation of second important point]</li>
        <li><strong>Point 3:</strong> [Detailed explanation of third important point]</li>
      </ul>

      <h3>Supporting Information</h3>
      <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
        <tr style="background-color: #f9f9f9;">
          <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Category</th>
          <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Details</th>
          <th style="padding: 8px; text-align: left; border: 1px solid #ccc;">Timeline</th>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;">[Category 1]</td>
          <td style="padding: 8px; border: 1px solid #ccc;">[Specific details or requirements]</td>
          <td style="padding: 8px; border: 1px solid #ccc;">[Date or timeframe]</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ccc;">[Category 2]</td>
          <td style="padding: 8px; border: 1px solid #ccc;">[Specific details or requirements]</td>
          <td style="padding: 8px; border: 1px solid #ccc;">[Date or timeframe]</td>
        </tr>
      </table>

      <h2>Conclusion & Next Steps</h2>
      <p>In summary, [briefly restate your main purpose and key points].</p>

      <p>I propose the following next steps:</p>
      <ol>
        <li>[First recommended action with specific timeline]</li>
        <li>[Second recommended action with specific timeline]</li>
        <li>[Third recommended action if applicable]</li>
      </ol>

      <p>Please contact me at [phone number] or [email address] if you need any additional information or clarification. I look forward to [hearing from you, working with you, your response, etc.].</p>

      <p>Thank you for your attention to this matter.</p>

      <p>Sincerely,</p>
      <br>
      <p><strong>[Your Full Name]</strong></p>
      <p>[Your Job Title/Position]</p>
      <p>[Your Company/Organization Name]</p>
      <p>[Phone Number]</p>
      <p>[Email Address]</p>

      <h3 style="margin-top: 30px;">Enclosures/Attachments:</h3>
      <ul>
        <li>[Document 1]</li>
        <li>[Document 2]</li>
        <li>[Document 3]</li>
      </ul>
      `,
  },
];
