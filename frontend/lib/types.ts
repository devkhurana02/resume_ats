export interface ScoreBreakdown {
  skill_match: number;
  experience: number;
  projects: number;
  education: number;
  formatting: number;
  total: number;
}

export interface MatchedSkills {
  required_matched: string[];
  required_missing: string[];
  preferred_matched: string[];
  preferred_missing: string[];
}

export interface WeakBullet {
  company: string;
  role: string;
  bullet: string;
  issues: string[];
  severity: "high" | "medium" | "low";
}

export interface Enhancement {
  original: string;
  enhanced: string;
  company: string;
  role: string;
  issues: string[];
}

export interface ExperienceGap {
  has_gap: boolean;
  resume_months: number;
  required_months: number;
  gap_months: number;
}

export interface Gaps {
  missing_skills: string[];
  preferred_missing: string[];
  weak_bullets: WeakBullet[];
  experience_gap: ExperienceGap;
  overall_gap_severity: "high" | "medium" | "low";
  project_relevance_score?: number;
}

export interface LearningResource {
  type: string;
  name: string;
  platform: string;
  url: string;
}

export interface PrioritySkill {
  skill: string;
  level: string;
  resources: LearningResource[];
  estimated_weeks: number;
}

export interface LearningPath {
  priority_skills: PrioritySkill[];
  secondary_skills: any[];
  total_estimated_weeks: number;
  recommended_order: string[];
  summary: string;
}

export interface FormattingResult {
  compliance_score: number;
  is_ats_friendly: boolean;
  ats_issues: any[];
  contact_info: Record<string, boolean>;
  sections_present: Record<string, boolean>;
}

export interface AnalysisResult {
  resume_job_id: string;
  jd_job_id: string;
  score: ScoreBreakdown;
  score_label: string;
  semantic_similarity: number;
  matched_skills: MatchedSkills;
  gaps: Gaps;
  enhancements: Enhancement[];
  formatting: FormattingResult;
  learning_path: LearningPath;
  feedback: string;
  created_at: string;
}

export interface UploadResponse {
  job_id: string;
  task_id: string;
  filename: string;
  status: string;
  message: string;
}

export interface StatusResponse {
  job_id: string;
  status: "pending" | "processing" | "done" | "failed";
  message: string;
  score_total: number | null;
}

export interface RankingEntry {
  rank: number;
  resume_job_id: string;
  candidate_name: string;
  score_total: number;
  semantic_similarity: number;
  matched_skills_count: number;
  missing_skills_count: number;
  top_matched_skills: string[];
  recommendation: string;
}

export interface RankingResponse {
  session_id: string;
  jd_job_id: string;
  summary: {
    total_resumes: number;
    top_candidate: string;
    average_score: number;
    score_distribution: Record<string, number>;
  };
  rankings: RankingEntry[];
  created_at: string;
}
