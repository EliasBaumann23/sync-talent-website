export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.18"
  }
  public: {
    Tables: {
      careers_admin_users: {
        Row: {
          active: boolean
          created_at: string
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          active?: boolean
          created_at?: string
          role: string
          updated_at?: string
          user_id: string
        }
        Update: {
          active?: boolean
          created_at?: string
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      careers_clients: {
        Row: {
          country: string | null
          created_at: string
          id: string
          industry: string | null
          internal_notes: string | null
          name: string
          updated_at: string
          website: string | null
        }
        Insert: {
          country?: string | null
          created_at?: string
          id?: string
          industry?: string | null
          internal_notes?: string | null
          name: string
          updated_at?: string
          website?: string | null
        }
        Update: {
          country?: string | null
          created_at?: string
          id?: string
          industry?: string | null
          internal_notes?: string | null
          name?: string
          updated_at?: string
          website?: string | null
        }
        Relationships: []
      }
      careers_job_events: {
        Row: {
          actor_user_id: string | null
          created_at: string
          event_type: string
          id: string
          job_id: string
          new_status: string | null
          previous_status: string | null
        }
        Insert: {
          actor_user_id?: string | null
          created_at?: string
          event_type: string
          id?: string
          job_id: string
          new_status?: string | null
          previous_status?: string | null
        }
        Update: {
          actor_user_id?: string | null
          created_at?: string
          event_type?: string
          id?: string
          job_id?: string
          new_status?: string | null
          previous_status?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "careers_job_events_job_id_fkey"
            columns: ["job_id"]
            isOneToOne: false
            referencedRelation: "careers_jobs"
            referencedColumns: ["id"]
          },
        ]
      }
      careers_jobs: {
        Row: {
          about_opportunity: string
          application_instructions: string | null
          application_url: string | null
          candidate_profile: string
          city: string | null
          client_id: string | null
          client_publication_approved: boolean
          client_visibility: string
          country: string
          created_at: string
          created_by: string | null
          employment_type: string
          expires_at: string | null
          function: string
          id: string
          industry: string | null
          location_display: string
          mandate: string
          opportunity_offers: string
          public_company_description: string
          public_company_logo_url: string | null
          public_company_name: string | null
          public_company_website: string | null
          published_at: string | null
          reference: string
          remote_eligibility: string | null
          responsibilities: string
          salary_currency: string | null
          salary_max: number | null
          salary_min: number | null
          salary_notes: string | null
          salary_period: string | null
          salary_visibility: boolean
          seniority: string | null
          slug: string
          state_region: string | null
          status: string
          summary: string
          title: string
          updated_at: string
          updated_by: string | null
          work_model: string
        }
        Insert: {
          about_opportunity?: string
          application_instructions?: string | null
          application_url?: string | null
          candidate_profile?: string
          city?: string | null
          client_id?: string | null
          client_publication_approved?: boolean
          client_visibility?: string
          country?: string
          created_at?: string
          created_by?: string | null
          employment_type?: string
          expires_at?: string | null
          function?: string
          id?: string
          industry?: string | null
          location_display?: string
          mandate?: string
          opportunity_offers?: string
          public_company_description?: string
          public_company_logo_url?: string | null
          public_company_name?: string | null
          public_company_website?: string | null
          published_at?: string | null
          reference: string
          remote_eligibility?: string | null
          responsibilities?: string
          salary_currency?: string | null
          salary_max?: number | null
          salary_min?: number | null
          salary_notes?: string | null
          salary_period?: string | null
          salary_visibility?: boolean
          seniority?: string | null
          slug: string
          state_region?: string | null
          status?: string
          summary?: string
          title: string
          updated_at?: string
          updated_by?: string | null
          work_model?: string
        }
        Update: {
          about_opportunity?: string
          application_instructions?: string | null
          application_url?: string | null
          candidate_profile?: string
          city?: string | null
          client_id?: string | null
          client_publication_approved?: boolean
          client_visibility?: string
          country?: string
          created_at?: string
          created_by?: string | null
          employment_type?: string
          expires_at?: string | null
          function?: string
          id?: string
          industry?: string | null
          location_display?: string
          mandate?: string
          opportunity_offers?: string
          public_company_description?: string
          public_company_logo_url?: string | null
          public_company_name?: string | null
          public_company_website?: string | null
          published_at?: string | null
          reference?: string
          remote_eligibility?: string | null
          responsibilities?: string
          salary_currency?: string | null
          salary_max?: number | null
          salary_min?: number | null
          salary_notes?: string | null
          salary_period?: string | null
          salary_visibility?: boolean
          seniority?: string | null
          slug?: string
          state_region?: string | null
          status?: string
          summary?: string
          title?: string
          updated_at?: string
          updated_by?: string | null
          work_model?: string
        }
        Relationships: [
          {
            foreignKeyName: "careers_jobs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "careers_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      careers_public_positions: {
        Row: {
          expires_at: string | null
          payload: Json
          published_at: string
          slug: string
        }
        Insert: {
          expires_at?: string | null
          payload: Json
          published_at: string
          slug: string
        }
        Update: {
          expires_at?: string | null
          payload?: Json
          published_at?: string
          slug?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      careers_public_jobs: {
        Args: { job_slug?: string; page_offset?: number; page_size?: number }
        Returns: Json
      }
      careers_public_payload: {
        Args: { j: Database["public"]["Tables"]["careers_jobs"]["Row"] }
        Returns: Json
      }
      careers_role: { Args: never; Returns: string }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
