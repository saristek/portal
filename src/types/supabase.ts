export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      "assets_lab-ict": {
        Row: {
          condition: string | null
          created_at: string
          details: string | null
          hostname: string | null
          id: number
          keyboard_id: number | null
          memory_id: number | null
          mouse_id: number | null
          pack_case_id: number | null
          pack_type: string | null
          processor_id: number | null
          row: string | null
          screen_id: number | null
          stabilizer_id: number | null
          storage_id: number | null
          ups_id: number | null
        }
        Insert: {
          condition?: string | null
          created_at?: string
          details?: string | null
          hostname?: string | null
          id?: number
          keyboard_id?: number | null
          memory_id?: number | null
          mouse_id?: number | null
          pack_case_id?: number | null
          pack_type?: string | null
          processor_id?: number | null
          row?: string | null
          screen_id?: number | null
          stabilizer_id?: number | null
          storage_id?: number | null
          ups_id?: number | null
        }
        Update: {
          condition?: string | null
          created_at?: string
          details?: string | null
          hostname?: string | null
          id?: number
          keyboard_id?: number | null
          memory_id?: number | null
          mouse_id?: number | null
          pack_case_id?: number | null
          pack_type?: string | null
          processor_id?: number | null
          row?: string | null
          screen_id?: number | null
          stabilizer_id?: number | null
          storage_id?: number | null
          ups_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "assets_lab-ict_keyboard_id_fkey"
            columns: ["keyboard_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_memory_id_fkey"
            columns: ["memory_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_mouse_id_fkey"
            columns: ["mouse_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_pack_case_id_fkey"
            columns: ["pack_case_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_processor_id_fkey"
            columns: ["processor_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_screen_id_fkey"
            columns: ["screen_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_stabilizer_id_fkey"
            columns: ["stabilizer_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_storage_id_fkey"
            columns: ["storage_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "assets_lab-ict_ups_id_fkey"
            columns: ["ups_id"]
            isOneToOne: false
            referencedRelation: "items_electronics"
            referencedColumns: ["id"]
          }
        ]
      }
      countries: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      employee: {
        Row: {
          birth: string | null
          born: string | null
          created_at: string
          domicile: string | null
          email: string | null
          gender: string | null
          id: number
          name: string | null
          password: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          birth?: string | null
          born?: string | null
          created_at?: string
          domicile?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          name?: string | null
          password?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          birth?: string | null
          born?: string | null
          created_at?: string
          domicile?: string | null
          email?: string | null
          gender?: string | null
          id?: number
          name?: string | null
          password?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      employee_type: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      Extra: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      items_brand: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      items_electronics: {
        Row: {
          brand_id: number | null
          codename: string | null
          created_at: string
          details_model: string | null
          details_more: string | null
          details_series: string | null
          family: string | null
          id: number
          type_id: number | null
        }
        Insert: {
          brand_id?: number | null
          codename?: string | null
          created_at?: string
          details_model?: string | null
          details_more?: string | null
          details_series?: string | null
          family?: string | null
          id?: number
          type_id?: number | null
        }
        Update: {
          brand_id?: number | null
          codename?: string | null
          created_at?: string
          details_model?: string | null
          details_more?: string | null
          details_series?: string | null
          family?: string | null
          id?: number
          type_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "items_electronics_brand_id_fkey"
            columns: ["brand_id"]
            isOneToOne: false
            referencedRelation: "items_brand"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "items_electronics_type_id_fkey"
            columns: ["type_id"]
            isOneToOne: false
            referencedRelation: "items_type"
            referencedColumns: ["id"]
          }
        ]
      }
      items_type: {
        Row: {
          created_at: string
          id: number
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      student: {
        Row: {
          created_at: string
          id: number
          isHSActivated: boolean | null
          nama: string | null
          password: string | null
          token_hotspot: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          isHSActivated?: boolean | null
          nama?: string | null
          password?: string | null
          token_hotspot?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          isHSActivated?: boolean | null
          nama?: string | null
          password?: string | null
          token_hotspot?: string | null
        }
        Relationships: []
      }
      subject: {
        Row: {
          created_at: string
          id: number
          name: string | null
          schedule_id: number | null
        }
        Insert: {
          created_at?: string
          id?: number
          name?: string | null
          schedule_id?: number | null
        }
        Update: {
          created_at?: string
          id?: number
          name?: string | null
          schedule_id?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
